import * as React from 'react'
import Page from '../components/layout/Page'
import Container from '../components/layout/Container'
import styled from '../utils/styled'

function IndexPage() {
  return (
    <Page>
      <Container>
        <PageContent>
          <h1>Welcome!</h1>
          <p>
            <b>Canvas</b>: To build a simple Typescript Redux-React app with HTML5 Canvas functionalities.<br />
            Part 1: Create 2 React components: the first one (let’s call it Panel) contains the second one, and the second one contains a HTML5 Canvas (as such, let’s call it Canvas).
            <br />
            Part 2: Add a button to the Panel component. This button should add a new random rectangle fitting inside the canvas’ width and height (400 x 400). You may consider a rectangle an object like this:
            <br />
            The rectangle X and Y  position should be related to the position of the red dot.
            <br />
            Part 3: Add a Text Input for each existing rectangle. It should contain, by default, the current color of a rectangle (for example, “#000”) and when typed inside, it should change the color of the rectangle.
            <br />
            Part 4: Create a system that allows a user to drag and drop any rectangle inside of the canvas. Use redux to capture and propagate that change down the component tree through Panel.
          </p>
          <p>
            <b>Polygon</b>: Implement a function that returns a boolean value for each item in the “events”: if the event on the given dimensions are inside of the polygon (2D) defined on by “gate”, it’s value has to be “true” and if not, “false”.
          </p>
        </PageContent>
      </Container>
    </Page>
  )
}

export default IndexPage

const PageContent = styled('article')`
  max-width: ${props => props.theme.widths.md};
  margin: 0 auto;
  line-height: 1.6;

  a {
    color: ${props => props.theme.colors.brand};
  }

  h1,
  h2,
  h3,
  h4 {
    margin-bottom: 0.5rem;
    font-family: ${props => props.theme.fonts.headings};
    line-height: 1.25;
  }
`
