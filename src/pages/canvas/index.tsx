import * as React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'

import { ApplicationState } from '../../store'
import { Hero } from '../../store/heroes/types'

import Panel from '../../components/canvas/panel'

// Separate state props + dispatch props to their own interfaces.
interface PropsFromState {
  loading: boolean
  data: Hero[]
  errors?: string
}

// Combine both state + dispatch props - as well as any props we want to pass - in a union type.
type AllProps = PropsFromState & RouteComponentProps

const CanvasPage: React.FC<AllProps> = ({ match }) => {
  return (
    <Panel />
  )
}

// It's usually good practice to only include one context at a time in a connected component.
// Although if necessary, you can always include multiple contexts. Just make sure to
// separate them from each other to prevent prop conflicts.
const mapStateToProps = ({ heroes }: ApplicationState) => ({
  loading: heroes.loading,
  errors: heroes.errors,
  data: heroes.data
})

// Now let's connect our component!
// With redux v4's improved typings, we can finally omit generics here.
export default connect(mapStateToProps)(CanvasPage)
