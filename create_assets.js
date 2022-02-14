var fs = require('fs');

let template = {}
template.symbol = 'TEST'
template.description = 'Testing for Winter\'s NFT widget'
template.seller_fee_basis_points = 0
template.collection = {}
template.collection.name = 'Test solana NFT Mint'
template.collection.family = 'Test solana NFT Mint'

// template.name
// template.image

for(i = 0; i<5000;i++) {
    template.name = 'Number '+i
    template.image = i + '.png'
    let properties = {}
    let creators = []

    let creator1 = {}
    creator1.address = '6j4nNrozTJkk1zatiXHezSLZArnRUq3WkGKHACThXGpZ'
    creator1.share = 100
    creators.push(creator1)

    let files = []
    let file1 = {}
    let uri = i + '.png'
    file1.uri = uri
    file1.type = 'image/png'
    files.push(file1)

    properties.creators = creators
    properties.files = files
    template.properties = properties
    var json = JSON.stringify(template);
    fs.writeFile('assets/'+i+'.json', json, 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } });
    fs.copyFile('assets_2/0.png', 'assets/'+i+'.png', (err) => {
        if (err) throw err;
        console.log('assets_2/0.png was copied to assets/'+i+'.png');
    });
}



