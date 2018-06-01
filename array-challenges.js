// Soal Pertama => Melakukan Looping Data Array

var dataHandling = (data) => {

	for (var i = 0; i < data.length; i++) {
		
		console.log(`Nomor ID : ${data[i][0]}`)
		console.log(`Nama Lengkap: ${data[i][1]}`)
		console.log(`TTL: ${data[i][2]} ${data[i][3]}`)
		console.log(`Hobi: ${data[i][4]}`)
		console.log()

	}

}

var input = [
["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

console.log(`Soal Pertama => Melakukan Looping Data Array`)
dataHandling(input)


// Soal Kedua => Menggunakan Built-in Function pada Array

var dataHandling2 = (data) => {

	data.splice(1,2,"Roman Alamsyah Elsharawy","Provinsi Bandar Lampung")
	data.splice(4,1,"Pria","SMA Internasional Metro")
	console.log(data)
	console.log()

	var tanggalArray = data[3].split("/") 	
	switch (parseInt(tanggalArray[1])){
		case 01:
		console.log(`Januari`)
		break;
		case 02:
		console.log(`Februari`)
		break;
		case 03:
		console.log(`Maret`)
		break;
		case 04:
		console.log(`April`)
		break;
		case 05:
		console.log(`Mei`)
		break;
		case 06:
		console.log(`Juni`)
		break;
		case 07:
		console.log(`Juli`)
		break;
		case 08:
		console.log(`Agustus`)
		break;
		case 09:
		console.log(`September`)
		break;
		case 10:
		console.log(`Oktober`)
		break;
		case 11:
		console.log(`November`)
		break;
		case 12:
		console.log(`Desember`)
		break;
	}
	console.log()

	tanggalArray.sort( (value1,value2) => {
		return value2 - value1
	})
	console.log(tanggalArray)
	console.log()

	console.log(data[3].split("/").join("-"))
	console.log()

	console.log(data[1].slice(0,14))

}

var input2 = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"] 

console.log(`Soal Kedua => Menggunakan Built-in Function pada Array`)
dataHandling2(input2)