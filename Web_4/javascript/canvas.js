var createImage=function(w,h){var i=document.createElement("canvas");i.width=w;i.height=h;i.ctx=i.getContext("2d");return i;}
var canvas = createImage(1024,512);
var ctx = canvas.ctx;
document.body.appendChild(canvas);
const foot = [
    [50.86759744022923,-21.798383338076917,54.16000854997335,-23.917474843549847,57.778065334829385,-25.310771525314685,61.579706305344985,-24.823762596975733,65.0168431653022,-22.69100336700319,65.22736925598322,-19.777045647294724,63.09649708656406,-16.826669881834157,59.66512409715465,-15.356252875428147,56.12216018899968,-14.92259970211097,52.06404407417057,-16.231839553378,50.2945579442406,-18.938589556263246],
    [60.12039562389232,-12.45714817900668,63.92394094034509,-14.994440399059425,68.75013312287521,-15.737202635924493,73.10937504616481,-14.878459739068003,76.36064492186433,-12.559833524837757,77.6863729180915,-9.181208344485064,75.4625672565435,-5.673231626251427,71.79886053681197,-3.7381471592011817,66.8618942467243,-3.4903609701416993,62.29264392518654,-5.1248680438596885,58.98975517513061,-8.760952968033395],
    [65.57414109270752,1.1797411270282658,69.37768640916029,-1.3575510930244814,74.20387859169041,-2.1003133298895467,78.56312051498001,-1.241570433033059,81.81439039067953,1.0770557811971881,83.14011838690669,4.455680961549877,80.9163127253587,7.963657679783514,77.25260600562717,9.898742146833756,72.3156397155395,10.146528335893239,67.74638939400174,8.512021262175251,64.44350064394581,4.875936338001546],
    [65.89915812212375,15.917267748549033,69.97688522977245,12.635767809535894,76.25232402290966,11.736330263416008,81.47328014710077,12.477566678331382,86.09545897877996,15.579569438835726,86.99032987455637,21.425830739951824,83.82647235747945,24.97297628549917,79.18353918133074,27.064789354098487,73.69821507617947,27.23418460503707,68.46309469655478,24.972976285499172,64.88602415530316,20.55351481505123],
    [58.48881251239855,36.09589759380796,65.7080603859302,29.82038065752831,74.19222753183148,28.331948884004674,82.75081761131048,31.085582242549528,88.10923922724437,34.28575070762116,91.45825273720305,41.65358042953028,87.067323913035,47.45853718012533,79.77391671356942,50.28659303297933,71.73628428966856,50.06332546564875,64.14518700042888,47.45853718012533,60.12637078847845,42.69549574373964],
    [-73.48953442580058,20.579088801900756,-80.48690958722098,13.959950657259256,-81.93681598574045,6.269142804242765,-81.49554012532147,-1.6107832746678348,-77.90207999991593,-9.181527272091415,-71.6611785393426,-14.98115303708649,-64.60076477263831,-17.880965834138024,-57.35123278004056,-19.078714598132443,-50.09111381970131,-19.902008890566687,-42.96765884171789,-19.08249722231963,-35.655087439697766,-18.51514254492067,-28.90987071615029,-18.578181953551955,-21.74774447703016,-19.60773669210723,-14.309090001741001,-20.364210136314323,-6.933479190821032,-21.688037717705875,0.33383104043200396,-22.888118253462963,7.772483543580581,-23.77067027395373,15.274173171058239,-24.338024951681817,22.460665755024706,-24.590182586206954,29.710197747622452,-23.707630865368966,36.8557533915613,-22.565778766908277,44.16832856198768,-19.28772830000901,51.48089996424725,-14.370654426435763,56.713170880643965,-7.499358885625703,60.24016927073608,-0.41616112008138906,61.75311234056134,6.518193267525415,62.38350642684393,13.515567625813127,61.67231220934209,20.50500542283382,59.08769637136125,27.56541945045329,54.35974072401175,34.87799085169213,48.686193947196124,39.41682827314464,41.87793781501736,42.379680478815025,34.313208779263185,43.26223219965301,27.063676786665432,42.25360166155246,19.625026568173826,38.28211891778152,13.457927624759604,31.720792179781256,9.486440924356895,25.290772320002496,6.019273449215143,18.7346738223298,0.21964785513691965,13.565442314564446,-5.832135373466421,9.467880753530935,-12.632472285211591,8.882365666622222,-19.188577231399584,11.277861070017005,-26.31203040678842,14.49287091019486,-32.99420772170462,17.833959567652954,-39.2981485848331,20.670732956060768,-45.854247082486715,23.192309301312157,-52.47338498877162,24.89437333435685,-59.5968381641068,25.020452151619416,-67.33461307855538,23.697386555044208],
]
const footScale = 0.2;
const stepLen = 60; 
var stepCount = 0;  
var stepTime = 500; 
const path = [56.20191403126277,162.4451015086347,83.38688266344644,172.80127602121507,107.98280549274708,192.86637096042372,121.57528916149568,221.34586055208607,124.81159479691195,256.2979614145819,141.64038410107662,293.8391067854107,168.82535143857336,311.9624183437419,203.77745230106916,336.5583411729056,238.0822920364817,344.9727358249879,278.2124819156436,341.0891690624884,316.40088841355566,329.43846877498976,343.58585575105235,310.6678960895754,370.77082308854904,275.7157952270795,359.12012280105046,244.64726112708325,344.23311687813566,207.10611575625444,355.23655603855093,168.9177092583423,394.0722236635463,137.2019140312628,438.0859803052077,137.84917515834604,487.27782596353507,174.0957982750084,507.9901820301992,221.9931216791693,513.1682710468652,269.243183956247,500.87030963228347,318.43502961457443,480.1579535656192,354.68165273123674,453.62744426338134,396.86543776550707,414.1445200788371,427.9340428271046,372.7198079555102,447.3518767949864,320.2916566617712,442.173787778395,272.39433325761024,427.9340429825634,218.02439858261675,441.5265266513118,185.66134222845398,472.59506075130815,160.418158272207,514.6670340117198,168.2291881671332,557.5405924870362,200.59229872785795,598.9654951914354,232.9553551615553,627.4449850627141,273.08554504131894,651.3936467669101,320.3356073183967,663.0443470544095,368.2329307225576,663.6916081814927,417.4247763808851,649.4518633856611,460.7912718954633,626.150462810664,509.33585642670744,593.1401453294179,530.6954736204549,556.8935222127556,559.9273870166451,517.9197870310509,582.4287517306153,484.11964343037323,597.1560832290169,459.03222473087396,621.0274949086466,438.11039022321154,651.3689440081158,429.43667093843567,686.3731150817684,432.05029606733103,726.1878666750503,421.6902139845064,748.5744620042316,397.8927935245363,778.6337708564557,367.5111094723503,792.6287871481064,335.0802046803193,795.4641381478963,294.8623601925252,790.3177294792127,255.26933447013639,776.3228370821212,225.344431214269,746.3711518226298,192.73203550406103,713.7991149596966,199.06094085265394,674.3068624609349,207.5062077919911,638.4763261746227,190.31310645331482,613.6509940547375,146.74931837304698,621.5992452450397,103.454341485492,665.5124383180124,60.96567428151931,716.1845355322713,48.49595708249788,763.6383682758693,51.23726133320403,810.1045243122669,71.53440096982465,842.407749982487,97.97907893142005,879.5993779794437,131.14717279570036,903.6790094213126,175.24174017377706,915.9471803279671,219.31612086267396,902.1335310600084,270.1561321514687,880.1365756762476,315.0232456643523,884.5103070340778,370.89556334366307,909.7723644212043,407.9691345807976,947.0675376346722,439.8492118274288,990.6429384281869,439.26727537005956,1036.8675099917996,414.23364852545194,1070.3264506272462,387.0500494883014,1100.6074853525497,351.4546920217324,1119.943854180156,306.7958514306488,1128.5371035594999,259.67124425611814,1122.6651029017848,208.79760059460207,1106.8898009575623,162.16340658911932,1082.4004208812885,108.81054339506417,1050.2046949092428,81.72759371897288,1016.627194271211,46.42875173061529];
const pLen = path.length;
for(var i = 2; i < pLen; i += 2){
    path[i] -= path[0];
    path[i+1] -= path[1];
}
path[0] = path[1] = 0;
var pos = {
    x : path[0],
    y : path[1],
    index : 0,
};
var pos1 = {
    x : path[0],
    y : path[1],
    index : 0,
};
function getDistOnPath(dist,pos){
    var nx = path[(pos.index + 2) % pLen] - pos.x;
    var ny = path[(pos.index + 3) % pLen] - pos.y;
    var d = Math.hypot(nx, ny);
    if(d > dist){
        pos.x += (nx / d) * dist;
        pos.y += (ny / d) * dist;
        return pos;
    }
    dist -= d;
    pos.index += 2;
    pos.x = path[pos.index % pLen];
    pos.y = path[(pos.index + 1) % pLen];
    return getDistOnPath(dist, pos);
}

function drawFoot(x,y,dir,left){
    var i,j,shape;
    var xdx = Math.cos(dir) * footScale;
    var xdy = Math.sin(dir) * footScale;
    
    if(left){
        ctx.setTransform(xdx, xdy, -xdy, xdx, x + xdy * 50, y - xdx * 50);
        ctx.rotate(-0.1); // make the foot turn out a bit
    }else{

        ctx.setTransform(xdx, xdy, -xdy, xdx, x - xdy * 50, y + xdx * 50);
        ctx.rotate(-0.1); 
        ctx.scale(1,-1);  
    }
    // draw the foot as a set of paths points
    ctx.beginPath();
    for(j = 0; j < foot.length; j ++){
        shape = foot[j];
        i = 0;
        ctx.moveTo(shape[i++],shape[i++]);
        while(i < shape.length){
            ctx.lineTo(shape[i++],shape[i++]);
        }
        ctx.closePath();
    }
    ctx.fill();
}

ctx.setTransform(1,0,0,1,0,0);
ctx.clearRect(0,0,canvas.width,canvas.height);
pos1 = getDistOnPath(stepLen/10,pos1); // put the second pos infront so that a direction can be found

function drawStep(){
    if(pos.index > pLen){  // if past end of path clear and restart
        ctx.setTransform(1,0,0,1,0,0);
        ctx.clearRect(0,0,canvas.width,canvas.height);
        pos.index = 0;
        pos1.index = 0;
        pos1.x = pos.x = path[0];
        pos1.y = pos.y = path[1];
        pos1 = getDistOnPath(stepLen/10,pos1);
    }
    pos = getDistOnPath(stepLen,pos);
    pos1 = getDistOnPath(stepLen,pos1);
    drawFoot(pos.x,pos.y,Math.atan2(pos1.y - pos.y, pos1.x - pos.x),(stepCount++) % 2 === 0);
    setTimeout(drawStep,stepTime);
}
drawStep();