// korolev mikhail 30/10/2022
const express = require("express");
const fs = require("fs");
const app = express();
const jsonParser = express.json();
const moment = require("moment");
const path = require("path");
var process = require('process');




var given = moment("1970-01-01", "YYYY-MM-DD");
var current = moment().startOf('day');


const todayis = moment.duration(given.diff(current)).asDays();
const russiatoday = require('./date.json');

//console.log(russiatoday);
//console.log(todayis);

if (todayis != russiatoday.date) {
    russiatoday.date = todayis;
    let datasave = {
        "date": todayis
    }
    let datasave1 = JSON.stringify(datasave);
    const path11 = 'date.json';
    fs.writeFileSync(path11, datasave1);

    const a0 = 'rots/rot0.json';
    const a1 = 'rots/rot1.json';
    const a2 = 'rots/rot2.json';
    const a3 = 'rots/rot3.json';
    const a4 = 'rots/rot4.json';
    const a5 = 'rots/rot5.json';
    const a6 = 'rots/rot6.json';
    const a7 = 'rots/rot7.json';
    const a8 = 'rots/rot8.json';
    const a9 = 'rots/rot9.json';
    const a10 = 'rots/rot1.json';
    const a11 = 'rots/rot11.json';
    const a12 = 'rots/rot12.json';
    const a13 = 'rots/rot13.json';
    const a14 = 'rots/rot14.json';
    const a15 = 'rots/rot15.json';
    const a16 = 'rots/rot16.json';
    const a17 = 'rots/rot17.json';
    const a18 = 'rots/rot18.json';
    const a19 = 'rots/rot19.json';
    const a20 = 'rots/rot20.json';
    const a21 = 'rots/rot21.json';
    const a22 = 'rots/rot22.json';
    const a23 = 'rots/rot23.json';
    const a24 = 'rots/rot24.json';
    const a25 = 'rots/rot25.json';
    const a26 = 'rots/rot26.json';
    // метод сохранения данных можно было реализовать намного проще и лучше, но осознал я это спустя сутки после написания кода, так что решил не переделывать то, что работает.
    let jsonex0 = {
        "rot": 0,
        "usages": 0
    }
    let jsonex1 = {
        "rot": 1,
        "usages": 0
    }
    let jsonex2 = {
        "rot": 2,
        "usages": 0
    }
    let jsonex3 = {
        "rot": 3,
        "usages": 0
    }
    let jsonex4 = {
        "rot": 4,
        "usages": 0
    }
    let jsonex5 = {
        "rot": 5,
        "usages": 0
    }
    let jsonex6 = {
        "rot": 6,
        "usages": 0
    }
    let jsonex7 = {
        "rot": 7,
        "usages": 0
    }
    let jsonex8 = {
        "rot": 8,
        "usages": 0
    }
    let jsonex9 = {
        "rot": 9,
        "usages": 0
    }
    let jsonex10 = {
        "rot": 10,
        "usages": 0
    }
    let jsonex11 = {
        "rot": 11,
        "usages": 0
    }
    let jsonex12 = {
        "rot": 12,
        "usages": 0
    }
    let jsonex13 = {
        "rot": 13,
        "usages": 0
    }
    let jsonex14 = {
        "rot": 14,
        "usages": 0
    }
    let jsonex15 = {
        "rot": 15,
        "usages": 0
    }
    let jsonex16 = {
        "rot": 16,
        "usages": 0
    }
    let jsonex17 = {
        "rot": 17,
        "usages": 0
    }
    let jsonex18 = {
        "rot": 18,
        "usages": 0
    }
    let jsonex19 = {
        "rot": 19,
        "usages": 0
    }
    let jsonex20 = {
        "rot": 20,
        "usages": 0
    }
    let jsonex21 = {
        "rot": 21,
        "usages": 0
    }
    let jsonex22 = {
        "rot": 22,
        "usages": 0
    }
    let jsonex23 = {
        "rot": 23,
        "usages": 0
    }
    let jsonex24 = {
        "rot": 24,
        "usages": 0
    }
    let jsonex25 = {
        "rot": 25,
        "usages": 0
    }
    let jsonex26 = {
        "rot": 26,
        "usages": 0
    }

    let data0 = JSON.stringify(jsonex0);
    let data1 = JSON.stringify(jsonex1);
    let data2 = JSON.stringify(jsonex2);
    let data3 = JSON.stringify(jsonex3);
    let data4 = JSON.stringify(jsonex4);
    let data5 = JSON.stringify(jsonex5);
    let data6 = JSON.stringify(jsonex6);
    let data7 = JSON.stringify(jsonex7);
    let data8 = JSON.stringify(jsonex8);
    let data9 = JSON.stringify(jsonex9);
    let data10 = JSON.stringify(jsonex10);
    let data11 = JSON.stringify(jsonex11);
    let data12 = JSON.stringify(jsonex12);
    let data13 = JSON.stringify(jsonex13);
    let data14 = JSON.stringify(jsonex14);
    let data15 = JSON.stringify(jsonex15);
    let data16 = JSON.stringify(jsonex16);
    let data17 = JSON.stringify(jsonex17);
    let data18 = JSON.stringify(jsonex18);
    let data19 = JSON.stringify(jsonex19);
    let data20 = JSON.stringify(jsonex20);
    let data21 = JSON.stringify(jsonex21);
    let data22 = JSON.stringify(jsonex22);
    let data23 = JSON.stringify(jsonex23);
    let data24 = JSON.stringify(jsonex24);
    let data25 = JSON.stringify(jsonex25);
    let data26 = JSON.stringify(jsonex26);

    fs.writeFileSync(a0, data0);
    fs.writeFileSync(a1, data1);
    fs.writeFileSync(a2, data2);
    fs.writeFileSync(a3, data3);
    fs.writeFileSync(a4, data4);
    fs.writeFileSync(a5, data5);
    fs.writeFileSync(a6, data6);
    fs.writeFileSync(a7, data7);
    fs.writeFileSync(a8, data8);
    fs.writeFileSync(a9, data9);
    fs.writeFileSync(a10, data10);
    fs.writeFileSync(a11, data11);
    fs.writeFileSync(a12, data12);
    fs.writeFileSync(a13, data13);
    fs.writeFileSync(a14, data14);
    fs.writeFileSync(a15, data15);
    fs.writeFileSync(a16, data16);
    fs.writeFileSync(a17, data17);
    fs.writeFileSync(a18, data18);
    fs.writeFileSync(a19, data19);
    fs.writeFileSync(a20, data20);
    fs.writeFileSync(a21, data21);
    fs.writeFileSync(a22, data22);
    fs.writeFileSync(a23, data23);
    fs.writeFileSync(a24, data24);
    fs.writeFileSync(a25, data25);
    fs.writeFileSync(a26, data26);

    russiatoday.date = todayis;

    delete require.cache[require.resolve('./rots/rot0.json')]
    delete require.cache[require.resolve('./rots/rot1.json')]
    delete require.cache[require.resolve('./rots/rot2.json')]
    delete require.cache[require.resolve('./rots/rot3.json')]
    delete require.cache[require.resolve('./rots/rot4.json')]
    delete require.cache[require.resolve('./rots/rot5.json')]
    delete require.cache[require.resolve('./rots/rot6.json')]
    delete require.cache[require.resolve('./rots/rot7.json')]
    delete require.cache[require.resolve('./rots/rot8.json')]
    delete require.cache[require.resolve('./rots/rot9.json')]
    delete require.cache[require.resolve('./rots/rot10.json')]
    delete require.cache[require.resolve('./rots/rot11.json')]
    delete require.cache[require.resolve('./rots/rot12.json')]
    delete require.cache[require.resolve('./rots/rot13.json')]
    delete require.cache[require.resolve('./rots/rot14.json')]
    delete require.cache[require.resolve('./rots/rot15.json')]
    delete require.cache[require.resolve('./rots/rot16.json')]
    delete require.cache[require.resolve('./rots/rot17.json')]
    delete require.cache[require.resolve('./rots/rot18.json')]
    delete require.cache[require.resolve('./rots/rot19.json')]
    delete require.cache[require.resolve('./rots/rot20.json')]
    delete require.cache[require.resolve('./rots/rot21.json')]
    delete require.cache[require.resolve('./rots/rot22.json')]
    delete require.cache[require.resolve('./rots/rot23.json')]
    delete require.cache[require.resolve('./rots/rot24.json')]
    delete require.cache[require.resolve('./rots/rot25.json')]
    delete require.cache[require.resolve('./rots/rot26.json')]


}




const urlencodedParser = express.urlencoded({
    extended: false
});


app.set('view engine', 'html');


function rot13(str, shift) {
    var o_text = str;
    var o_letters = o_text.split("");
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var c_text = "",
        _x = "";
    for (x in o_letters) {
        if (shift > 0) {
            _x = alphabet[(alphabet.indexOf(o_letters[x]) + shift) % alphabet.length]
        } else {
            _x = alphabet[(alphabet.indexOf(o_letters[x]) + (26 - shift)) % alphabet.length]
        }
        c_text = c_text + _x;
    }
    return c_text;
}




app.post("/encode", urlencodedParser, function(req, res) {

    if (!req.body.message) return res.status(400);
    if (!req.body.rot) return res.status(400);


    const msg = req.body.message;
    var rot = Number(req.body.rot);
    newmsg = rot13(msg, rot);
    if (rot == 0) {
        const path = require('./rots/rot0.json');
        const diediedie = 'rots/rot0.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }
        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 1) {
        const path = require("./rots/rot1.json");
        const diediedie = 'rots/rot1.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 2) {
        const path = require("./rots/rot2.json");
        const diediedie = 'rots/rot2.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 3) {
        const path = require("./rots/rot3.json");
        const diediedie = 'rots/rot3.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 4) {
        const path = require("./rots/rot4.json");
        const diediedie = 'rots/rot4.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 5) {
        const path = require("./rots/rot5.json");
        const diediedie = 'rots/rot5.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 6) {
        const path = require("./rots/rot6.json");
        const diediedie = 'rots/rot6.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 7) {
        const path = require("./rots/rot7.json");
        const diediedie = 'rots/rot7.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 8) {
        const path = require("./rots/rot8.json");
        const diediedie = 'rots/rot8.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 9) {
        const path = require("./rots/rot9.json");
        const diediedie = 'rots/rot9.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 10) {
        const path = require("./rots/rot10.json");
        const diediedie = 'rots/rot10.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 11) {
        const path = require("./rots/rot11.json");
        const diediedie = 'rots/rot11.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 12) {
        const path = require("./rots/rot12.json");
        const diediedie = 'rots/rot12.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 13) {
        const path = require("./rots/rot13.json");
        const diediedie = 'rots/rot13.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 14) {
        const path = require("./rots/rot14.json");
        const diediedie = 'rots/rot14.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 15) {
        const path = require("./rots/rot15.json");
        const diediedie = 'rots/rot15.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 16) {
        const path = require("./rots/rot16.json");
        const diediedie = 'rots/rot16.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 17) {
        const path = require("./rots/rot17.json");
        const diediedie = 'rots/rot17.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 18) {
        const path = require("./rots/rot18.json");
        const diediedie = 'rots/rot18.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 19) {
        const path = require("./rots/rot19.json");
        const diediedie = 'rots/rot19.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 20) {
        const path = require("./rots/rot20.json");
        const diediedie = 'rots/rot20.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 21) {
        const path = require("./rots/rot21.json");
        const diediedie = 'rots/rot21.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 22) {
        const path = require("./rots/rot22.json");
        const diediedie = 'rots/rot22.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 23) {
        const path = require("./rots/rot23.json");
        const diediedie = 'rots/rot23.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 24) {
        const path = require("./rots/rot24.json");
        const diediedie = 'rots/rot24.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 25) {
        const path = require("./rots/rot25.json");
        const diediedie = 'rots/rot25.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 26) {
        const path = require("./rots/rot26.json");
        const diediedie = 'rots/rot26.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }

    delete require.cache[require.resolve('./rots/rot0.json')]
    delete require.cache[require.resolve('./rots/rot1.json')]
    delete require.cache[require.resolve('./rots/rot2.json')]
    delete require.cache[require.resolve('./rots/rot3.json')]
    delete require.cache[require.resolve('./rots/rot4.json')]
    delete require.cache[require.resolve('./rots/rot5.json')]
    delete require.cache[require.resolve('./rots/rot6.json')]
    delete require.cache[require.resolve('./rots/rot7.json')]
    delete require.cache[require.resolve('./rots/rot8.json')]
    delete require.cache[require.resolve('./rots/rot9.json')]
    delete require.cache[require.resolve('./rots/rot10.json')]
    delete require.cache[require.resolve('./rots/rot11.json')]
    delete require.cache[require.resolve('./rots/rot12.json')]
    delete require.cache[require.resolve('./rots/rot13.json')]
    delete require.cache[require.resolve('./rots/rot14.json')]
    delete require.cache[require.resolve('./rots/rot15.json')]
    delete require.cache[require.resolve('./rots/rot16.json')]
    delete require.cache[require.resolve('./rots/rot17.json')]
    delete require.cache[require.resolve('./rots/rot18.json')]
    delete require.cache[require.resolve('./rots/rot19.json')]
    delete require.cache[require.resolve('./rots/rot20.json')]
    delete require.cache[require.resolve('./rots/rot21.json')]
    delete require.cache[require.resolve('./rots/rot22.json')]
    delete require.cache[require.resolve('./rots/rot23.json')]
    delete require.cache[require.resolve('./rots/rot24.json')]
    delete require.cache[require.resolve('./rots/rot25.json')]
    delete require.cache[require.resolve('./rots/rot26.json')]


    res.status(201).send({
        "message": newmsg
    });
    // process.exit(0)


})

app.get("/decode", function(req, res) {

    if (!req.query.message) return res.status(400);
    if (!req.query.rot) return res.status(400);

    const msga = req.query.message;
    const rot = Number(req.query.rot);

    const newmsg1 = rot13(msga, 26 - rot);

    if (rot == 0) {
        const path = require('./rots/rot0.json');
        const diediedie = 'rots/rot0.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }
        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 1) {
        const path = require("./rots/rot1.json");
        const diediedie = 'rots/rot1.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 2) {
        const path = require("./rots/rot2.json");
        const diediedie = 'rots/rot2.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 3) {
        const path = require("./rots/rot3.json");
        const diediedie = 'rots/rot3.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 4) {
        const path = require("./rots/rot4.json");
        const diediedie = 'rots/rot4.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 5) {
        const path = require("./rots/rot5.json");
        const diediedie = 'rots/rot5.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 6) {
        const path = require("./rots/rot6.json");
        const diediedie = 'rots/rot6.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 7) {
        const path = require("./rots/rot7.json");
        const diediedie = 'rots/rot7.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 8) {
        const path = require("./rots/rot8.json");
        const diediedie = 'rots/rot8.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 9) {
        const path = require("./rots/rot9.json");
        const diediedie = 'rots/rot9.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 10) {
        const path = require("./rots/rot10.json");
        const diediedie = 'rots/rot10.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 11) {
        const path = require("./rots/rot11.json");
        const diediedie = 'rots/rot11.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 12) {
        const path = require("./rots/rot12.json");
        const diediedie = 'rots/rot12.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 13) {
        const path = require("./rots/rot13.json");
        const diediedie = 'rots/rot13.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 14) {
        const path = require("./rots/rot14.json");
        const diediedie = 'rots/rot14.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 15) {
        const path = require("./rots/rot15.json");
        const diediedie = 'rots/rot15.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 16) {
        const path = require("./rots/rot16.json");
        const diediedie = 'rots/rot16.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 17) {
        const path = require("./rots/rot17.json");
        const diediedie = 'rots/rot17.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 18) {
        const path = require("./rots/rot18.json");
        const diediedie = 'rots/rot18.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 19) {
        const path = require("./rots/rot19.json");
        const diediedie = 'rots/rot19.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 20) {
        const path = require("./rots/rot20.json");
        const diediedie = 'rots/rot20.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 21) {
        const path = require("./rots/rot21.json");
        const diediedie = 'rots/rot21.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 22) {
        const path = require("./rots/rot22.json");
        const diediedie = 'rots/rot22.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 23) {
        const path = require("./rots/rot23.json");
        const diediedie = 'rots/rot23.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 24) {
        const path = require("./rots/rot24.json");
        const diediedie = 'rots/rot24.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 25) {
        const path = require("./rots/rot25.json");
        const diediedie = 'rots/rot25.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }
    if (rot == 26) {
        const path = require("./rots/rot26.json");
        const diediedie = 'rots/rot26.json'
        let jsonex = {
            "rot": rot,
            "usages": path.usages + 1
        }

        let data = JSON.stringify(jsonex);
        fs.writeFileSync(diediedie, data);
    }

    delete require.cache[require.resolve('./rots/rot0.json')]
    delete require.cache[require.resolve('./rots/rot1.json')]
    delete require.cache[require.resolve('./rots/rot2.json')]
    delete require.cache[require.resolve('./rots/rot3.json')]
    delete require.cache[require.resolve('./rots/rot4.json')]
    delete require.cache[require.resolve('./rots/rot5.json')]
    delete require.cache[require.resolve('./rots/rot6.json')]
    delete require.cache[require.resolve('./rots/rot7.json')]
    delete require.cache[require.resolve('./rots/rot8.json')]
    delete require.cache[require.resolve('./rots/rot9.json')]
    delete require.cache[require.resolve('./rots/rot10.json')]
    delete require.cache[require.resolve('./rots/rot11.json')]
    delete require.cache[require.resolve('./rots/rot12.json')]
    delete require.cache[require.resolve('./rots/rot13.json')]
    delete require.cache[require.resolve('./rots/rot14.json')]
    delete require.cache[require.resolve('./rots/rot15.json')]
    delete require.cache[require.resolve('./rots/rot16.json')]
    delete require.cache[require.resolve('./rots/rot17.json')]
    delete require.cache[require.resolve('./rots/rot18.json')]
    delete require.cache[require.resolve('./rots/rot19.json')]
    delete require.cache[require.resolve('./rots/rot20.json')]
    delete require.cache[require.resolve('./rots/rot21.json')]
    delete require.cache[require.resolve('./rots/rot22.json')]
    delete require.cache[require.resolve('./rots/rot23.json')]
    delete require.cache[require.resolve('./rots/rot24.json')]
    delete require.cache[require.resolve('./rots/rot25.json')]
    delete require.cache[require.resolve('./rots/rot26.json')]




    res.status(201).send({
        "message": newmsg1
    });



});

app.get("/stats", function(req, res) {

    const path0 = require('./rots/rot0.json');
    const path1 = require('./rots/rot1.json');
    const path2 = require('./rots/rot2.json');
    const path3 = require('./rots/rot3.json');
    const path4 = require('./rots/rot4.json');
    const path5 = require('./rots/rot5.json');
    const path6 = require('./rots/rot6.json');
    const path7 = require('./rots/rot7.json');
    const path8 = require('./rots/rot8.json');
    const path9 = require('./rots/rot9.json');
    const path10 = require('./rots/rot10.json');
    const path11 = require('./rots/rot11.json');
    const path12 = require('./rots/rot12.json');
    const path13 = require('./rots/rot13.json');
    const path14 = require('./rots/rot14.json');
    const path15 = require('./rots/rot15.json');
    const path16 = require('./rots/rot16.json');
    const path17 = require('./rots/rot17.json');
    const path18 = require('./rots/rot18.json');
    const path19 = require('./rots/rot19.json');
    const path20 = require('./rots/rot20.json');
    const path21 = require('./rots/rot21.json');
    const path22 = require('./rots/rot22.json');
    const path23 = require('./rots/rot23.json');
    const path24 = require('./rots/rot24.json');
    const path25 = require('./rots/rot25.json');
    const path26 = require('./rots/rot26.json');

    res.status(201).send([{
            "rot": 0,
            "usages": path0.usages
        }, {
            "rot": 1,
            "usages": path1.usages
        }, {
            "rot": 2,
            "usages": path2.usages
        }, {
            "rot": 3,
            "usages": path3.usages
        }, {
            "rot": 4,
            "usages": path4.usages
        }, {
            "rot": 5,
            "usages": path5.usages
        },
        {
            "rot": 6,
            "usages": path6.usages
        },
        {
            "rot": 7,
            "usages": path7.usages
        },
        {
            "rot": 8,
            "usages": path8.usages
        },
        {
            "rot": 9,
            "usages": path9.usages
        },
        {
            "rot": 10,
            "usages": path10.usages
        },
        {
            "rot": 11,
            "usages": path11.usages
        },
        {
            "rot": 12,
            "usages": path12.usages
        },
        {
            "rot": 13,
            "usages": path13.usages
        },
        {
            "rot": 14,
            "usages": path14.usages
        },
        {
            "rot": 15,
            "usages": path15.usages
        },
        {
            "rot": 16,
            "usages": path16.usages
        },
        {
            "rot": 17,
            "usages": path17.usages
        },
        {
            "rot": 18,
            "usages": path18.usages
        },
        {
            "rot": 19,
            "usages": path19.usages
        },
        {
            "rot": 20,
            "usages": path20.usages
        },
        {
            "rot": 21,
            "usages": path21.usages
        },
        {
            "rot": 22,
            "usages": path22.usages
        },
        {
            "rot": 23,
            "usages": path23.usages
        },
        {
            "rot": 24,
            "usages": path24.usages
        },
        {
            "rot": 25,
            "usages": path25.usages
        },
        {
            "rot": 26,
            "usages": path26.usages
        }
    ])


})


app.listen(3000);