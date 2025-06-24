const canvacord = require("canvacord");
const knights = require("canvas-hikki");
const option = require("knights-canvas");
const fs = require("fs");
const path = require("path");

const __path = process.cwd();
const tmp = path.join(__path, "/public/canvas_tmp");
const example_profile = "https://i.ibb.co/G5mJZxs/rin.jpg";
const example_icon = "https://i.ibb.co/G5mJZxs/rin.jpg";
const example_bg = "https://i.ibb.co/4YBNyvP/images-76.jpg";
const fakeUrl = "http";
const mp = "Put the Parameter value ";

// Welcome functions
async function welcome(req, res) {
    const { username, groupname, groupicon, membercount, profile, background } = req.query;
    
    try {
        const image = await new option.Welcome()
            .setUsername(username)
            .setGuildName(groupname)
            .setGuildIcon(groupicon)
            .setMemberCount(membercount)
            .setAvatar(profile)
            .setBackground(background)
            .toAttachment();
            
        res.type("png").send(image.toBuffer());
    } catch (e) {
        console.error(e);
        res.status(500).send({ status: false, message: "Internal Server Error" });
    }
}

async function welcome2(req, res) {
    const { username, groupname, membercount, profile, background } = req.query;
    
    try {
        const image = await new knights.Welcome2()
            .setUsername(username)
            .setAvatar(profile)
            .setGroupname(groupname)
            .setMember(membercount)
            .setBg(background)
            .toAttachment();
            
        res.type("png").send(image.toBuffer());
    } catch (e) {
        console.error(e);
        res.status(500).send({ status: false, message: "Internal Server Error" });
    }
}

async function welcome3(req, res) {
    const { username, profile } = req.query;
    
    try {
        const image = await new knights.Welcome3()
            .setUsername(username)
            .setAvatar(profile)
            .toAttachment();
            
        res.type("png").send(image.toBuffer());
    } catch (e) {
        console.error(e);
        res.status(500).send({ status: false, message: "Internal Server Error" });
    }
}

// Leave functions
async function leave(req, res) {
    const { username, groupname, groupicon, membercount, profile, background } = req.query;
    
    try {
        const image = await new option.Goodbye()
            .setUsername(username)
            .setGuildName(groupname)
            .setGuildIcon(groupicon)
            .setMemberCount(membercount)
            .setAvatar(profile)
            .setBackground(background)
            .toAttachment();
            
        res.type("png").send(image.toBuffer());
    } catch (e) {
        console.error(e);
        res.status(500).send({ status: false, message: "Internal Server Error" });
    }
}

async function leave2(req, res) {
    const { username, membercount, profile, background } = req.query;
    
    try {
        const image = await new knights.Goodbye2()
            .setUsername(username)
            .setAvatar(profile)
            .setMember(membercount)
            .setBg(background)
            .toAttachment();
            
        res.type("png").send(image.toBuffer());
    } catch (e) {
        console.error(e);
        res.status(500).send({ status: false, message: "Internal Server Error" });
    }
}

async function leave3(req, res) {
    const { username, profile } = req.query;
    
    try {
        const image = await new knights.Goodbye3()
            .setUsername(username)
            .setAvatar(profile)
            .toAttachment();
            
        res.type("png").send(image.toBuffer());
    } catch (e) {
        console.error(e);
        res.status(500).send({ status: false, message: "Internal Server Error" });
    }
}

// Role functions
async function promote(req, res) {
    const { username, groupname, groupicon, membercount, profile, background } = req.query;
    
    try {
        const image = await new option.Promote()
            .setUsername(username)
            .setGuildName(groupname)
            .setGuildIcon(groupicon)
            .setMemberCount(membercount)
            .setAvatar(profile)
            .setBackground(background)
            .toAttachment();
            
        res.type("png").send(image.toBuffer());
    } catch (e) {
        console.error(e);
        res.status(500).send({ status: false, message: "Internal Server Error" });
    }
}

async function demote(req, res) {
    const { username, groupname, groupicon, membercount, profile, background } = req.query;
    
    try {
        const image = await new option.Demote()
            .setUsername(username)
            .setGuildName(groupname)
            .setGuildIcon(groupicon)
            .setMemberCount(membercount)
            .setAvatar(profile)
            .setBackground(background)
            .toAttachment();
            
        res.type("png").send(image.toBuffer());
    } catch (e) {
        console.error(e);
        res.status(500).send({ status: false, message: "Internal Server Error" });
    }
}

// GFX functions
async function kaneki(req, res) {
    const { nama } = req.query;
    if (!nama) return res.status(400).send({ status: false, message: "Put the Parameter value 'nama'" });
    
    try {
        const image = await new knights.Gfx1()
            .setName(nama)
            .toAttachment();
            
        res.type("png").send(image.toBuffer());
    } catch (e) {
        console.error(e);
        res.status(500).send({ status: false, message: "Internal Server Error" });
    }
}

async function loli(req, res) {
    const { nama } = req.query;
    if (!nama) return res.status(400).send({ status: false, message: "Put the Parameter value 'nama'" });
    
    try {
        const image = await new knights.Gfx2()
            .setName(nama)
            .toAttachment();
            
        res.type("png").send(image.toBuffer());
    } catch (e) {
        console.error(e);
        res.status(500).send({ status: false, message: "Internal Server Error" });
    }
}

async function sadboy(req, res) {
    const { nama, nama2 } = req.query;
    if (!nama) return res.status(400).send({ status: false, message: "Put the Parameter value 'nama'" });
    if (!nama2) return res.status(400).send({ status: false, message: "Put the Parameter value 'nama2'" });
    
    try {
        const image = await new knights.Gfx3()
            .setText1(nama)
            .setText2(nama2)
            .toAttachment();
            
        res.type("png").send(image.toBuffer());
    } catch (e) {
        console.error(e);
        res.status(500).send({ status: false, message: "Internal Server Error" });
    }
}

async function girlNeko(req, res) {
    const { nama, nama2 } = req.query;
    if (!nama) return res.status(400).send({ status: false, message: "Put the Parameter value 'nama'" });
    if (!nama2) return res.status(400).send({ status: false, message: "Put the Parameter value 'nama2'" });
    
    try {
        const image = await new knights.Gfx4()
            .setText1(nama)
            .setText2(nama2)
            .toAttachment();
            
        res.type("png").send(image.toBuffer());
    } catch (e) {
        console.error(e);
        res.status(500).send({ status: false, message: "Internal Server Error" });
    }
}

async function rem(req, res) {
    const { nama } = req.query;
    if (!nama) return res.status(400).send({ status: false, message: "Put the Parameter value 'nama'" });
    
    try {
        const image = await new knights.Gfx5()
            .setText(nama)
            .toAttachment();
            
        res.type("png").send(image.toBuffer());
    } catch (e) {
        console.error(e);
        res.status(500).send({ status: false, message: "Internal Server Error" });
    }
}

async function customGfx(req, res) {
    const { nama, bg } = req.query;
    if (!nama) return res.status(400).send({ status: false, message: "Put the Parameter value 'nama'" });
    if (!bg) return res.status(400).send({ status: false, message: "Put the Parameter value 'bg'" });
    
    try {
        const image = await new knights.customGfx()
            .setText(nama)
            .setBg(bg)
            .toAttachment();
            
        res.type("png").send(image.toBuffer());
    } catch (e) {
        console.error(e);
        res.status(500).send({ status: false, message: "Internal Server Error" });
    }
}

async function customGfx2(req, res) {
    const { nama, nama2, bg } = req.query;
    if (!nama) return res.status(400).send({ status: false, message: "Put the Parameter value 'nama'" });
    if (!nama2) return res.status(400).send({ status: false, message: "Put the Parameter value 'nama2'" });
    if (!bg) return res.status(400).send({ status: false, message: "Put the Parameter value 'bg'" });
    
    try {
        const image = await new knights.customGfx2()
            .setText1(nama)
            .setText2(nama2)
            .setBg(bg)
            .toAttachment();
            
        res.type("png").send(image.toBuffer());
    } catch (e) {
        console.error(e);
        res.status(500).send({ status: false, message: "Internal Server Error" });
    }
}

// Canvacord functions
async function trigger(req, res) {
    const { url } = req.query;
    if (!url) return res.status(400).send({ status: false, message: "Put the Parameter value 'url'" });
    
    try {
        const image = await canvacord.Canvacord.trigger(url);
        const stiker = await sticker(image, null, "triggerred from rest api", "example.com");
        res.type("webp").send(stiker);
    } catch (e) {
        console.error(e);
        res.status(500).send({ status: false, message: "Internal Server Error" });
    }
}

async function beautiful(req, res) {
    const { url } = req.query;
    if (!url) return res.status(400).send({ status: false, message: "Put the Parameter value 'url'" });
    
    try {
        const image = await canvacord.Canvacord.beautiful(url);
        res.type("png").send(image);
    } catch (e) {
        console.error(e);
        res.status(500).send({ status: false, message: "Internal Server Error" });
    }
}

async function bed(req, res) {
    const { url, url2 } = req.query;
    if (!url) return res.status(400).send({ status: false, message: "Put the Parameter value 'url'" });
    if (!url2) return res.status(400).send({ status: false, message: "Put the Parameter value 'url2'" });
    
    try {
        const image = await canvacord.Canvacord.bed(url, url2);
        const stiker = await sticker(image, null, "triggerred from rest api", "example.com");
        res.type("webp").send(stiker);
    } catch (e) {
        console.error(e);
        res.status(500).send({ status: false, message: "Internal Server Error" });
    }
}

async function kiss(req, res) {
    const { url, url2 } = req.query;
    if (!url) return res.status(400).send({ status: false, message: "Put the Parameter value 'url'" });
    if (!url2) return res.status(400).send({ status: false, message: "Put the Parameter value 'url2'" });
    
    try {
        const image = await canvacord.Canvacord.kiss(url, url2);
        res.type("png").send(image);
    } catch (e) {
        console.error(e);
        res.status(500).send({ status: false, message: "Internal Server Error" });
    }
}

async function spank(req, res) {
    const { url, url2 } = req.query;
    if (!url) return res.status(400).send({ status: false, message: "Put the Parameter value 'url'" });
    if (!url2) return res.status(400).send({ status: false, message: "Put the Parameter value 'url2'" });
    
    try {
        const image = await canvacord.Canvacord.spank(url, url2);
        res.type("png").send(image);
    } catch (e) {
        console.error(e);
        res.status(500).send({ status: false, message: "Internal Server Error" });
    }
}

async function slap(req, res) {
    const { url, url2 } = req.query;
    if (!url) return res.status(400).send({ status: false, message: "Put the Parameter value 'url'" });
    if (!url2) return res.status(400).send({ status: false, message: "Put the Parameter value 'url2'" });
    
    try {
        const image = await canvacord.Canvacord.slap(url, url2);
        const stiker = await sticker(image, null, "triggerred from rest api", "example.com");
        res.type("webp").send(stiker);
    } catch (e) {
        console.error(e);
        res.status(500).send({ status: false, message: "Internal Server Error" });
    }
}

async function facepalm(req, res) {
    const { url } = req.query;
    if (!url) return res.status(400).send({ status: false, message: "Put the Parameter value 'url'" });
    
    try {
        const image = await canvacord.Canvacord.facepalm(url);
        res.type("png").send(image);
    } catch (e) {
        console.error(e);
        res.status(500).send({ status: false, message: "Internal Server Error" });
    }
}

async function rainbow(req, res) {
    const { url } = req.query;
    if (!url) return res.status(400).send({ status: false, message: "Put the Parameter value 'url'" });
    
    try {
        const image = await canvacord.Canvacord.rainbow(url);
        res.type("png").send(image);
    } catch (e) {
        console.error(e);
        res.status(500).send({ status: false, message: "Internal Server Error" });
    }
}

async function rip(req, res) {
    const { url } = req.query;
    if (!url) return res.status(400).send({ status: false, message: "Put the Parameter value 'url'" });
    
    try {
        const image = await canvacord.Canvacord.rip(url);
        res.type("png").send(image);
    } catch (e) {
        console.error(e);
        res.status(500).send({ status: false, message: "Internal Server Error" });
    }
}

async function trash(req, res) {
    const { url } = req.query;
    if (!url) return res.status(400).send({ status: false, message: "Put the Parameter value 'url'" });
    
    try {
        const image = await canvacord.Canvacord.trash(url);
        res.type("png").send(image);
    } catch (e) {
        console.error(e);
        res.status(500).send({ status: false, message: "Internal Server Error" });
    }
}

async function hitler(req, res) {
    const { url } = req.query;
    if (!url) return res.status(400).send({ status: false, message: "Put the Parameter value 'url'" });
    
    try {
        const image = await canvacord.Canvacord.hitler(url);
        res.type("png").send(image);
    } catch (e) {
        console.error(e);
        res.status(500).send({ status: false, message: "Internal Server Error" });
    }
}

async function joker(req, res) {
    const { url } = req.query;
    if (!url) return res.status(400).send({ status: false, message: "Put the Parameter value 'url'" });
    
    try {
        const image = await canvacord.Canvacord.jokeOverHead(url);
        res.type("png").send(image);
    } catch (e) {
        console.error(e);
        res.status(500).send({ status: false, message: "Internal Server Error" });
    }
}

async function distracted(req, res) {
    const { url, url2, url3 } = req.query;
    if (!url) return res.status(400).send({ status: false, message: "Put the Parameter value 'url'" });
    if (!url2) return res.status(400).send({ status: false, message: "Put the Parameter value 'url2'" });
    if (!url3) return res.status(400).send({ status: false, message: "Put the Parameter value 'url3'" });
    
    try {
        const image = await canvacord.Canvacord.distracted(url, url2, url3);
        res.type("png").send(image);
    } catch (e) {
        console.error(e);
        res.status(500).send({ status: false, message: "Internal Server Error" });
    }
}

async function jail(req, res) {
    const { url } = req.query;
    if (!url) return res.status(400).send({ status: false, message: "Put the Parameter value 'url'" });
    
    try {
        const image = await canvacord.Canvacord.jail(url);
        res.type("png").send(image);
    } catch (e) {
        console.error(e);
        res.status(500).send({ status: false, message: "Internal Server Error" });
    }
}

async function deleteImg(req, res) {
    const { url } = req.query;
    if (!url) return res.status(400).send({ status: false, message: "Put the Parameter value 'url'" });
    
    try {
        const image = await canvacord.Canvacord.delete(url, true);
        res.type("png").send(image);
    } catch (e) {
        console.error(e);
        res.status(500).send({ status: false, message: "Internal Server Error" });
    }
}

async function wasted(req, res) {
    const { url } = req.query;
    if (!url) return res.status(400).send({ status: false, message: "Put the Parameter value 'url'" });
    
    try {
        const image = await canvacord.Canvacord.wasted(url);
        res.type("png").send(image);
    } catch (e) {
        console.error(e);
        res.status(500).send({ status: false, message: "Internal Server Error" });
    }
}

async function wanted(req, res) {
    const { url } = req.query;
    if (!url) return res.status(400).send({ status: false, message: "Put the Parameter value 'url'" });
    
    try {
        const image = await canvacord.Canvacord.wanted(url);
        res.type("png").send(image);
    } catch (e) {
        console.error(e);
        res.status(500).send({ status: false, message: "Internal Server Error" });
    }
}

async function shit(req, res) {
    const { url } = req.query;
    if (!url) return res.status(400).send({ status: false, message: "Put the Parameter value 'url'" });
    
    try {
        const image = await canvacord.Canvacord.shit(url);
        res.type("png").send(image);
    } catch (e) {
        console.error(e);
        res.status(500).send({ status: false, message: "Internal Server Error" });
    }
}

async function affect(req, res) {
    const { url } = req.query;
    if (!url) return res.status(400).send({ status: false, message: "Put the Parameter value 'url'" });
    
    try {
        const image = await canvacord.Canvacord.affect(url);
        const stiker = await sticker(image, null, "triggerred from rest api", "example.com");
        res.type("webp").send(stiker);
    } catch (e) {
        console.error(e);
        res.status(500).send({ status: false, message: "Internal Server Error" });
    }
}

async function rank(req, res) {
    const { rank, pp, level, currentxp, needxp, name, discriminator } = req.query;
    
    if (!rank) return res.status(400).send({ status: false, message: "Put the Parameter value 'rank'" });
    if (!pp) return res.status(400).send({ status: false, message: "Put the Parameter value 'pp'" });
    if (!pp.startsWith("http")) return res.status(400).send({ status: false, message: `${mp}'pp' dengan link gambar yang valid` });
    if (!level) return res.status(400).send({ status: false, message: "Put the Parameter value 'level'" });
    if (!currentxp) return res.status(400).send({ status: false, message: "Put the Parameter value 'currentxp'" });
    if (!needxp) return res.status(400).send({ status: false, message: "Put the Parameter value 'needxp'" });
    if (!name) return res.status(400).send({ status: false, message: "Put the Parameter value 'name'" });
    if (!discriminator) return res.status(400).send({ status: false, message: "Put the Parameter value 'discriminator'" });
    if (discriminator.length !== 4) return res.status(400).send({ status: false, message: "'discriminator' harus 4 angka!" });
    
    try {
        const image = await new canvacord.Rank()
            .setRank(parseInt(rank))
            .setAvatar(pp)
            .setLevel(parseInt(level))
            .setCurrentXP(parseInt(currentxp))
            .setRequiredXP(parseInt(needxp))
            .setProgressBar("#f2aa4c", "COLOR")
            .setUsername(name)
            .setDiscriminator(parseInt(discriminator))
            .build();
            
        res.type("png").send(image);
    } catch (e) {
        console.error(e);
        res.status(500).send({ status: false, message: "Internal Server Error" });
    }
}

module.exports = {
    // Welcome/Leave
    welcome,
    welcome2,
    welcome3,
    leave,
    leave2,
    leave3,
    
    // Role changes
    promote,
    demote,
    
    // 
};