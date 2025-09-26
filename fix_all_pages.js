const fs = require('fs');
const files = ['home1.html', 'home2.html', 'home3.html', 'home4.html', 'home5.html', 'home6.html'];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        // Enable CSS files
        content = content.replace(/<!-- <link rel="stylesheet" href="bootstrap.css"> -->/g, '<link rel="stylesheet" href="bootstrap.css">');
        content = content.replace(/<!-- <link rel="stylesheet" href="css2.css"> -->/g, '<link rel="stylesheet" href="css2.css">');
        content = content.replace(/<!-- <link rel="stylesheet" href="line-awesome-min.css"> -->/g, '<link rel="stylesheet" href="line-awesome-min.css">');
        content = content.replace(/<!-- <link rel="stylesheet" href="owl-coursel-min.css"> -->/g, '<link rel="stylesheet" href="owl-coursel-min.css">');
        content = content.replace(/<!-- <link rel="stylesheet" href="owl-theme-default.css"> -->/g, '<link rel="stylesheet" href="owl-theme-default.css">');
        content = content.replace(/<!-- <link rel="stylesheet" href="animate-min.css"> -->/g, '<link rel="stylesheet" href="animate-min.css">');
        content = content.replace(/<!-- <link rel="stylesheet" href="smooth-scrollbar.css"> -->/g, '<link rel="stylesheet" href="smooth-scrollbar.css">');
        content = content.replace(/<!-- <link rel="stylesheet" href="light-box-min.css"> -->/g, '<link rel="stylesheet" href="light-box-min.css">');
        
        // Replace emojis with proper icons
        content = content.replace(/<i class="las la-cog">🔧<\/i>/g, '<i class="las la-cog"></i>');
        content = content.replace(/<i class="las la-home">⌂<\/i>/g, '<i class="las la-home"></i>');
        content = content.replace(/<i class="lar la-user">☺<\/i>/g, '<i class="lar la-user"></i>');
        content = content.replace(/<i class="las la-briefcase">☼<\/i>/g, '<i class="las la-briefcase"></i>');
        content = content.replace(/<i class="las la-stream">☃<\/i>/g, '<i class="las la-stream"></i>');
        content = content.replace(/<i class="las la-shapes">✎<\/i>/g, '<i class="las la-shapes"></i>');
        content = content.replace(/<i class="las la-grip-vertical">⋮<\/i>/g, '<i class="las la-grip-vertical"></i>');
        content = content.replace(/<i class="las la-envelope">✉<\/i>/g, '<i class="las la-envelope"></i>');
        content = content.replace(/<i class="las la-arrow-down">↓<\/i>/g, '<i class="las la-arrow-down"></i>');
        content = content.replace(/<i class="las la-bezier-curve">〄<\/i>/g, '<i class="las la-bezier-curve"></i>');
        content = content.replace(/<i class="las la-code">﹝\/﹞<\/i>/g, '<i class="las la-code"></i>');
        content = content.replace(/<i class="las la-dollar-sign">✉<\/i>/g, '<i class="las la-envelope"></i>');
        
        // Fix contact section visibility
        content = content.replace(/style="opacity: 0; transform: translate\(0px, 180px\);"/g, 'style="opacity: 1; transform: translate(0px, 0px);"');
        
        // Enable portfolio section
        content = content.replace(/<!-- <section class="portfolio-area page-section scroll-to-page" id="portfolio">/g, '<section class="portfolio-area page-section scroll-to-page" id="portfolio">');
        content = content.replace(/<\/section> -->/g, '</section>');
        
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Fixed ${file}`);
    }
});

console.log('All files updated successfully!');