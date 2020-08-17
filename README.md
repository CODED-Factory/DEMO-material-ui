# Material UI

[Slides](https://docs.google.com/presentation/d/17UIfeERpl-VDr4XGc3YkQitICg4aC0mATkHI8HUe1xE/edit?usp=sharing)

<!-- [Recording](https://youtu.be/MNHc0j8PDnE) -->

### Setup a React-App

1. Create a react app (if you already have a project go to the next section):

   ```bash
   $ yarn create react-app <appName>
   ```

2. Run the app:

   ```bash
   $ yarn start
   ```

### Setup Material-UI

1. Install dependency

   ```bash
   $ yarn add @material-ui/core
   ```

2. Material-UI uses Roboto Font and font icons so we'll have to add their stylesheets in `index.html` (optional)

   ```html
   <link
     rel="stylesheet"
     href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
   />
   <link
     rel="stylesheet"
     href="https://fonts.googleapis.com/icon?family=Material+Icons"
   />
   ```

3. To use pre-built SVG icons provided by Material-UI install the following dependancy (optional)

   ```bash
   $ yarn add @material-ui/icons
   ```

### Using Material-UI Components

1. Using a button component from Material-UI

   - Create a component called `ButtonDemo.js` Import the component

   ```jsx
   import { Button } from "@material-ui/core";
   ```

   - Use the component

   ```jsx
   <Button> I am a button </Button>
   ```

   - Import `<ButtonDemo/>` in `app.js` and render it

   - Customize the button [Documentation](https://material-ui.com/api/button/)

   ```jsx
   <Button variant="contained" color="secondary" size="medium">
        I am contained button
    </Button>
    <Button variant="outlined" color="primary" size="medium" fullWidth>
        I am a outlined button
    </Button>
    <Button variant="text" color="secondary" size="medium">
        I am a text button
    </Button>
   ```

2. Using `Typography` in Material-UI

   - Create a component called `TypographDemo.js` and Import `Typography`

   ```jsx
   import { Typography } from "@material-ui/core";
   ```

   - Use `Typography`

   ```jsx
   <Typography>Any text here</Typography>
   ```

   - Import `<TypographDemo/>` in `app.js` and render it

   - Customize Typography using [options](https://material-ui.com/api/typography/)

   ```jsx
   <Typography align="center" >
       Any text here
   </Typography>
   <Typography align="left" variant="h1"  >
       Any text here
   </Typography>
   <Typography align="right" variant="h1" gutterBottom color="primary"  >
       Any text here
   </Typography>
   ```

### Customize Material-UI theme

1. Look at the default theme for Material-UI:

   - The [theme](https://material-ui.com/customization/default-theme/#default-theme) defines the screen breakpoints, components directions, colors , typography and many other things

2. To change the theme first create a `theme.js` file in your project directory

3. In the `theme.js` file, import [MuiTheme](https://material-ui.com/customization/theming/#createmuitheme-options-args-theme) to customize css

   ```jsx
   import { createMuiTheme } from "@material-ui/core/styles";
   ```

4. Define a constant `theme` and create a styled component for your project using the same options `Material-UI` uses to override their styles

   ```jsx
   const theme = createMuiTheme({
     palette: {
       primary: {
         main: "#32CD32",
       },
       secondary: {
         main: "#FF4500",
       },
     },
   });

   export default theme;
   ```

5. Now we need to pass a [ThemeProvider](https://material-ui.com/styles/api/#themeprovider) to our project

   - In `index.js` import the following

   ```jsx
   import { ThemeProvider } from "@material-ui/core/styles";
   ```

   - Import your theme

   ```jsx
   import theme from "./theme.js";
   ```

   - Wrap the `<App>` with the `ThemeProvider` and pass it the `theme`

   ```jsx
   <ThemeProvider theme={theme}>
     <App />
   </ThemeProvider>
   ```

### Styled components in Material-UI

1. Import `styled` fromt material-ui'

   ```jsx
   import { styled } from "@material-ui/core/styles";
   ```

2. Import the component/components you're going to style

   ```jsx
   import { Button } from "@material-ui/core";
   ```

3. Customize you styled component

   ```jsx
   const MyButton = styled(Button)({
     background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
     border: 0,
     borderRadius: 3,
     boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
     color: "white",
     height: 48,
     padding: "0 30px",
   });
   ```

4. Use the Styled component in your code

   ```jsx
   <MyButton>Styled Components</MyButton>
   ```

5. To pass props to a styled component for multiple use

   - Change the code above to look like the following in `ButtonDemo.js`

   ```jsx
   const MyButton = styled(Button)({
     background: (props) =>
       props.customcolor ?? "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
     border: 0,
     borderRadius: 3,
     boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
     color: "white",
     height: 48,
     padding: "0 30px",
   });
   ```

   - Then change the buttons rendered to look like the following

   ```jsx
    <MyButton customcolor={"#CCB647"}>I am contained button</MyButton>
    <MyButton customcolor={"#FFFF00"} variant="contained" color="secondary">
    I am a outlined button
    </MyButton>
    <Button variant="text" color="secondary">
    I am a text button
    </Button>
   ```

### More frequently used components

- Cards

  1.  Create a component called `CardDemo.js` Import the `Card` component and it's children

      ```jsx
      import {
        Card,
        CardHeader,
        CardMedia,
        CardContent,
        Typography,
        Avatar,
      } from "@material-ui/core";
      ```

  2.  Import `styled` for styled components

  ```jsx
  import { styled } from "@material-ui/core/styles";
  ```

  3.  Style the components

      ```jsx
      const MyCardMedia = styled(CardMedia)({
        height: 30,
        paddingTop: "56.25%", // 16:9
      });
      ```

  4.  Using the imported components [options](https://material-ui.com/components/cards/#card)

      ```jsx
      <Card>
        <CardHeader title="Food" subheader="Everyone loves food" />
        <MyCardMedia
          image="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"
          title="All types of food"
        />
        <CardContent>
          <Typography paragraph color="secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
      </Card>
      ```

  5.  Import `<CardDemo/>` into `app.js` and render it

- Grid

  1. Create a component called `GridDemo.js` and Import the `Grid` component and Card component from the previous secition

     ```jsx
     import { Grid } from "@material-ui/core";
     import CardDemo from "./CardDemo.js";
     ```

  2. Using the `Grid` [options](https://material-ui.com/api/container/)

     ```jsx
     <Grid container spacing={8}>
       <Grid item xs={12}>
         <CardDemo />
       </Grid>
       <Grid item xs={6}>
         <CardDemo />
       </Grid>
       <Grid item xs={6}>
         <CardDemo />
       </Grid>
       <Grid item md={4} xs={6}>
         <CardDemo />
       </Grid>
       <Grid item md={4} xs={6}>
         <CardDemo />
       </Grid>
       <Grid item md={4} xs={6}>
         <CardDemo />
       </Grid>
       <Grid item md={4} xs={6}>
         <CardDemo />
       </Grid>
     </Grid>
     ```

  3. Import `<GridDemo/>` into `app.js` and render it

- Containers

  1. Create a component called `ContainerDemo.js` Import the `Container` component

     ```jsx
     import { Container } from "@material-ui/core";
     import GridDemo from "./GridDemo.js";
     ```

  2. Using the `Container` [options](https://material-ui.com/api/container/)

     ```jsx
     <Container maxWidth="xl">
        <GridDemo>
     </Container>
     ```

  3. Import `<ContainerDemo/>` into `app.js` and render it
