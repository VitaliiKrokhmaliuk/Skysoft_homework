let counter = {
  value: 0,
  initialValue: 0,
  next() {
    this.value++;
    return this;
  },
  previous() {
    this.value--;
    return this;
  },
  reset() {
    this.value = this.initialValue;
    return this;
  },
  print() {
    console.log(this.value);
    return this;
  },
};

counter.next().next().print().reset().print();
