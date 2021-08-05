import * as React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps, Route, Switch } from 'react-router-dom'

import { ApplicationState } from '../store'

// Separate state props + dispatch props to their own interfaces.
interface PropsFromState {
  events: [Number, Number, Number, Number][],
  gate: [Number, Number][]
}

const polygonPage: React.FC<PropsFromState> = ({ events, gate }) => {
  return (
    <></>
  )
}

// It's usually good practice to only include one context at a time in a connected component.
// Although if necessary, you can always include multiple contexts. Just make sure to
// separate them from each other to prevent prop conflicts.
const mapStateToProps = ({ polygon }: ApplicationState) => ({
  events: polygon.events,
  gate: polygon.gate
})

// Now let's connect our component!
// With redux v4's improved typings, we can finally omit generics here.
export default connect(mapStateToProps)(polygonPage)
