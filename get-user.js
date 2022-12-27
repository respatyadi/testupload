const readlineSync = require('readline-sync')
const { User } = require('./models/users')

const getUserAll = () => {
    console.clear()

    const user = new User()
    retrievedUser = user.getUsers();
    retrievedUser.forEach((data, index) => {
        console.log(`         DATA USER ${index+1}`)
        console.log("================================")
        console.log(`Nama : ${data.nama}`)
        console.log(`Umur : ${data.umur}`)
        console.log(`Alamat : ${data.alamat}`)
        console.log(`Jenis Kelamin : ${data.jenisKelamin}`)
        console.log("================================")
        
    });
    // console.log(retrievedUser);
    
    const option = readlineSync.question("Tekan 1 untuk kembali: ")
    console.clear()

    return option
}

module.exports = { getUserAll }