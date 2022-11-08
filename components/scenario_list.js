// return scenario list @maxim
const ScenarioList = (props) => {
  return (
    <View style={styles.scenario_list}>
      <Text style={styles.title}>Scenario List {props.category}</Text>
      <ScrollView horizontal={true}>
        <Scenario category={props.category} level="1" />
        <Scenario category={props.category} level="2" />
        <Scenario category={props.category} level="3" />
        <Scenario category={props.category} level="4" />
        <Scenario category={props.category} level="5" />
        <Scenario category={props.category} level="6" />
        <Scenario category={props.category} level="7" />
        <Scenario category={props.category} level="8" />
        <Scenario category={props.category} level="9" />
        <Scenario category={props.category} level="10" />
      </ScrollView>
    </View>
  );
}

export default ScenarioList;