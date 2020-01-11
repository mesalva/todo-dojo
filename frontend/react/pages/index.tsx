import React, { PureComponent } from 'react'

export default class Home extends PureComponent {

  state = {
    number: 0
  }

  componentDidMount(){
    setInterval(() => this.increment(this.state.number), 5000)
    const a = new Picapau()
    // @ts-ignore
    console.log(a.migra())
  }

  // @debugMethod()
  increment(oldNumber){
    const number = oldNumber + 1
    this.setState({ number })
    return number
  }

  render(){
    return (
      <div>
        Number: {this.state.number}
      </div>
    )
  }
}

function debugMethod() {
  return function (target, methodName: string, descriptor: PropertyDescriptor) {
    console.log(target, descriptor)
    const method = descriptor.value
    descriptor.value = function(){
      const result = method.apply(this, arguments);
      console.log("Debug method execution:", {methodName, arguments: Array.from(arguments), result})
      return result
    }
  }
}

function voador(constructorFunction: Function) {
  constructorFunction.prototype.voa = function voa(){
    return 'voa'
  };
}

function migratoria(constructorFunction: Function) {
  constructorFunction.prototype.migra = function migra(){
    return 'migra'
  };
}

class Animal{
  vive(){
    return 'vive'
  }
  morre(){
    return 'morre'
  }
}

class Mamifero extends Animal{
  bebeLeite(){
    return 'bebeLeite'
  }
}

class Ave extends Animal{
  botaOvo(){
    return 'botaOvo'
  }
}

class Pinguin extends Ave{
  usaTerno(){
    return 'usaTerno'
  }
}

@voador
@migratoria
class Picapau extends Ave{
  picaArvore(){
    return 'picaArvore'
  }
}

@voador
class Morcego extends Mamifero{
  usaTerno(){
    return 'usaTerno'
  }
}
