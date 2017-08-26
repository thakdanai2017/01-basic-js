const hello = require('./hello')

test('hello',()=>{
  //Arrange
  let name ='thakdanai'

  //Act
  let result = hello(name)

 //Assert
 expect(result).toBe('Hello thakdanai')
})
