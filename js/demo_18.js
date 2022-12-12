function showpage(index){
    const p = document.querySelector('.show-classdemo');
    console.log('p: ', p);

    switch(index){
        case 1:
            p.innerHTML = `<iframe src="./demo/w02/" width="100%" height="100%" />`;
            break;
        case 2:
            p.innerHTML = `<iframe src="./demo/w03/card_18.html" width="100%" height="100%" />`;
            break;
        case 3:
            p.innerHTML = `<iframe src="./demo/w05/blog_18.html" width="100%" height="100%" />`;
            break;
        case 4:
            p.innerHTML = `<iframe src="./demo/w06/blog_18.html" width="100%" height="100%" />`;
            break;
        case 5:
            p.innerHTML = `<iframe src="./demo/w08/landing_18.html" width="100%" height="100%" />`;
            break;
        case 6:
            p.innerHTML = `<iframe src="./demo/w09/resume_18.html" width="100%" height="100%" />`;
            break;
        case 7:
            p.innerHTML = `<iframe src="./demo/w11/portfolio/index.html" width="100%" height="100%" />`;
            break;
        case 8:
            p.innerHTML = `<iframe src="./demo/w12/portfolio/index.html" width="100%" height="100%" />`;
            break;
        case 9:
            p.innerHTML = `<iframe src="./demo/w13/portfolio/index.html" width="100%" height="100%" />`;
            break;
        case 10:
            p.innerHTML = `<iframe src="./demo/w14/portfolio/index.html" width="100%" height="100%" />`;
            break;
    }
}