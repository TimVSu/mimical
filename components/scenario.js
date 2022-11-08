// return scenario @maxim
const Scenario = (props) => {
  return (
    <View style={styles.scenario}>
      <Square></Square>
      <Text style={styles.label}>Scenario {props.category}{props.level}</Text>
    </View>
  );
}

export default Scenario;