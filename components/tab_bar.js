// return tab bar @maxim
const TabBar = () => {
  return (
    <View style={styles.tab_bar}>
      <FontAwesomeIcon icon={faHouse} color={blue} size={32} />
      <FontAwesomeIcon icon={faChartSimple} color={gray4} size={32} />
      <FontAwesomeIcon icon={faGear} color={gray4} size={32} />
    </View>
  );
}

export default TabBar;