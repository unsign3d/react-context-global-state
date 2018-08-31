import connect from '../connect'
import Cat from './Cat'

const mapContextToProps = (props) => (context) => ({
  name: props.name,
  family: context.data.family
})

const ConnectedCat = (props) => (connect(Cat, mapContextToProps(props)))

export default ConnectedCat