function solve(data, criteria) {
  let [prefix, value] = criteria.split("-");

  let counter = 0;

  JSON.parse(data).forEach((person) => selectByCriteria.call(person));

  function selectByCriteria() {
    if (this[prefix] === value || criteria === "all") {
      return console.log(
        `${counter++}. ${this.first_name} ${this.last_name} - ${this.email}`
      );
    }
  }
}
