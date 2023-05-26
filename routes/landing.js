const { Router } = require('express');
const router = Router();

router.get('/', (req, res, next) => {
    //   res.send(`
    //     <html>
    //       <body>
    //         <h1>Hello, World!!!!</h1>
    //       </body>
    //     </html>
    //   `);
    try {
        const timeStamp = new Date().toTimeString();
        //use the mustache. index.mustache
        res.render('index' , {time: timeStamp, items:['item one', 'other', 'new item']});  
    }
    catch (e) {
        console.log("error is: ", e);
    }
});

module.exports = router;