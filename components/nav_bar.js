// return navigation bar @maxim
const NavBar = () => {
  return (
    <View style={styles.nav_bar}>
      <Text style={styles.page_title}>Page Title</Text>
      <FontAwesomeIcon icon={faCircleInfo} color={blue} size={32} />
    </View>
  );
}

export default NavBar;