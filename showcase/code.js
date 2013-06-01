//Leica M7

//Domain 
var domain = INTERVALS(1)(30);
 
var domain2 = DOMAIN([[0,1],[0,1]])([30,30]);
 
var domain3 = DOMAIN([[0,1],[0,1],[0,1]])([15,15,15]);

//Angles

function shell(){

	var controlpoints1 = [[1,0,0],[1,0,-1],[0,0,0],[0,0,0]];
	 
	var c1 = CUBIC_HERMITE(S0)(controlpoints1); 
	 
	var controlpoints2 = [[0,1,0],[0,1,-1],[0,0,0],[0,0,0]];
	 
	var c2 = CUBIC_HERMITE(S0)(controlpoints2);
	 
	var block1 = CUBIC_HERMITE(S1)([c1,c2,[-2,0,0],[0,2,0]]);

//Origin angle anticlockwise
	   
	var mblock1 = S([2])([1])(MAP(block1)(domain2));
	 
	var mblock2 =T([0])([10])( R([0,1])(PI/2)(mblock1) );
	 
	var mblock3 =T([0,1])([10,3])( R([0,1])(PI)(mblock1) );
	 
	var mblock4 =T([1])([3])( R([0,1])(PI*3/2)(mblock1) );

//Up_angles
	 
	var angles1 = STRUCT([mblock1, mblock2, mblock3, mblock4]);

//Down_angles

	var angles2 = T([2])([-5])(angles1);

	//UP_little_angles

	var angles_up_little = T([2])([0.3])(S([2])([0.3])(STRUCT([mblock1,mblock4])));

	var angles_up_little1 = T([0,2])([-4,0.2])(S([2])([0.2])(STRUCT([mblock3,mblock2])));


//Border_angles in black

	var angles3 = COLOR([0,0,0])(T([2])([-1])((S([2])([4])(MAP(block1)(domain2)))));

	var angles4 = COLOR([0,0,0])(T([2])([-1])((S([2])([4])(mblock2))));

	var angles5 = COLOR([0,0,0])(T([2])([-1])((S([2])([4])(mblock3))));

	var angles6 = COLOR([0,0,0])(T([2])([-1])((S([2])([4])(mblock4))));

	var angles = STRUCT([angles1,angles2,angles3, angles4,angles5,angles6, angles_up_little]);

	


	var controlpoints3 = [[0,1,0],[5.5,1,0],[0,0,0],[0,0,0]];
	 
	var c3 = CUBIC_HERMITE(S0)(controlpoints3);
	 
	var controlpoints4 = [[1,0,0],[5.5,0,0],[0,0,0],[0,0,0]];
	 
	var c4 = CUBIC_HERMITE(S0)(controlpoints4);
	 
	var block7 = CUBIC_HERMITE(S1)([c3,c4,[0,-2,0],[2,0,0]]);
	 
	var mblock7 = MAP(block7)(domain2);
	 
	var mblock8 = R([0,2])([PI])(mblock7);
	 
	var mblock8 = T([0])([10])(mblock8);


	 
	var underBlock = (STRUCT([mblock7,mblock8]));

	var underBlock_little = T([2])([0.3])(S([0])([0.6])(underBlock));

	var underBlock2 = T([2])([-6])(STRUCT([mblock7,mblock8]));

	var underBlock3 = T([1])([3])(R([1,2])([PI])(STRUCT([mblock7,mblock8])));

	var underBlock_little2 = T([2])([0.3])(S([0])([0.6])(underBlock3));

	var underBlock4 = T([2])([-6])(STRUCT([underBlock3]));

	var underBlock5 = (STRUCT([underBlock,underBlock2,underBlock3,underBlock4,underBlock_little, underBlock_little2]))



//Line_Block_to_close_superfices

	var controlpoints5 = [[0,4,0],[0,14,0],[0,0,0],[0,0,0]];
	 
	var controlpoints6 = [[0.5,4,0],[0.5,14,0],[0,0,0],[0,0,0]];
	 
	var c5 = CUBIC_HERMITE(S0)(controlpoints5);
	 
	var c6 = CUBIC_HERMITE(S0)(controlpoints6);
	 
	var lineUp1 = CUBIC_HERMITE(S1)([c5,c6,[0,0,0],[0,0,0]]);
	 
	var mlineOrz1 = T([0,1])([14,1])(S([1])([2])(R([0,1])([PI/2])(MAP(lineUp1)(domain2))));
	 
	var mlineOrz2 =T([2])([-6])(mlineOrz1);

	var mlineVert1= S([2])([0.6])(R([0,2])([PI/2])(mlineOrz1));

	var mlineVert2= T([0])([10])(mlineVert1);

	var line_up = (STRUCT([mlineOrz2,mlineVert2,mlineVert1,mlineOrz1]));



	
//Front_part


	var controlpoints5 = [[0,4,0],[0,14,0],[0,0,0],[0,0,0]];
	 
	var controlpoints6 = [[0.5,4,0],[0.5,14,0],[0,0,0],[0,0,0]];
	 
	var c5 = CUBIC_HERMITE(S0)(controlpoints5);
	 
	var c6 = CUBIC_HERMITE(S0)(controlpoints6);
	 
	var lineUp1 = CUBIC_HERMITE(S1)([c5,c6,[0,0,0],[0,0,0]]);
	 
	var mlineOrz1 = T([0,1])([14,1])(S([1])([2])(R([0,1])([PI/2])(MAP(lineUp1)(domain2))));	 

	var controlpoints35 = [[3,0,0],[4,0,0],[0,0,0],[0,0,0]];
	 
	var controlpoints36 = [[3,0,-1],[4,0,-1],[0,0,0],[0,0,0]];
	 
	var c35 = CUBIC_HERMITE(S0)(controlpoints35);
	 
	var c36 = CUBIC_HERMITE(S0)(controlpoints36);
	 
	var block18 = CUBIC_HERMITE(S1)([c35,c36,[0,0,0],[0,0,0]]);
	 
	var mblock18 = MAP(block18)(domain2);
	 
	 
	var controlpoints37 = [[4,0,-1],[5,0,-1],[0,0,0],[0,0,0]];
	 
	var controlpoints38 = [[4,0,-0.8],[5,0,-0.8],[0,0,0],[0,0,0]];
	 
	var c37 = CUBIC_HERMITE(S0)(controlpoints37);
	 
	var c38 = CUBIC_HERMITE(S0)(controlpoints38);
	 
	var block19 = CUBIC_HERMITE(S1)([c37,c38,[0,0,0],[0,0,0]]);
	 
	var mblock19 = MAP(block19)(domain2);
	 
	 
	var controlpoints39 = [[4,0,0],[5,0,0],[0,0,0],[0,0,0]];
	 
	var controlpoints40 = [[4,0,-0.2],[5,0,-0.2],[0,0,0],[0,0,0]];
	 
	var c39 = CUBIC_HERMITE(S0)(controlpoints39);
	 
	var c40 = CUBIC_HERMITE(S0)(controlpoints40);
	 
	var block20 = CUBIC_HERMITE(S1)([c39,c40,[0,0,0],[0,0,0]]);
	 
	var mblock20 = MAP(block20)(domain2);
	 
//Viewfinder
	 
	var frontRight = T([0])([-2])(STRUCT([mblock18, mblock19,mblock20]));

	var frontLeft = T([0])([5])(R([0,1])([PI])(frontRight));

	var viewfinder=STRUCT([frontRight,frontLeft]);

	var frontRight1 = T([0,2])([4,-2])(R([1,2])([PI/2])(S([0])([0.5])(mlineOrz1)));

	var frontDown= T([0,2])([1,-7])(R([1,2])([PI/2])(S([0])([0.8])(mlineOrz1)));

	var frontDown1= T([0,1,2])([1,3,-7])(R([1,2])([PI/2])(S([0])([0.8])(mlineOrz1)));

//Front_Side

	var frontCenter= (T([0,2])([1,-6])(R([1,2])([PI/2])(S([0,2])([0.8,0.4])(mlineOrz1))));

	var frontCenter2= (T([0,2])([1,-5])(R([1,2])([PI/2])(S([0,2])([0.8,0.4])(mlineOrz1))));

	var frontCenter3= (T([0,2])([1,-4])(R([1,2])([PI/2])(S([0,2])([0.8,0.4])(mlineOrz1))));

	var frontCenter4= (T([0,2])([1,-3])(R([1,2])([PI/2])(S([0,2])([0.8,0.4])(mlineOrz1))));

	var frontCenterBlack=COLOR([0,0,0])(STRUCT([frontCenter,frontCenter2,frontCenter3,frontCenter4]));

	var front= (STRUCT([viewfinder, frontRight1, frontDown, frontDown1, frontCenterBlack]));
	

//Retro_Side




	var model0 = (STRUCT([DISK(1.8)()]));

	var model11 = T([0,1,2])([4,0.1,-3.2])(R([1,2])([PI/2])(model0));

	var hole1 = T([0,1])([2,0])(viewfinder);

	var hole2 = T([0,2])([4,-0.4])(S([0,2])([0.4,0.4])(T([0,1])([5,0])(viewfinder)));

	var hole3 = T([0,1])([0,0])(frontRight);

	var closehole = (R([1,2])([PI/2])(MAP(lineUp1)(domain2)));

	var closehole11 = R([0,2])([PI/2])(closehole)

	var close0  = T([0,1])([2,0])(frontRight);

	var close1  = T([0,1])([3,0])(frontRight);

	var close2  = T([0,1])([4,0])(frontRight);

	var close3  = T([0,1])([4.6,0])(frontRight);

	var close4  = R([0,1])([PI])(frontRight);

	var close5 = T([0])([10])(close4);

	var close6 = T([0])([-0.5])(close5);

	var close=STRUCT([close0,close2, close3, close5, close6]);

	var retro=T([1])([3])(STRUCT([frontDown,frontCenterBlack,model11,hole1,hole2, hole3, close]));


//Upper_Little_Block



	var little_up0= (T([0,1,2])([9.5,1,0.3])(S([0,1])([0.6,2])(R([0,1])([PI/2])(MAP(lineUp1)(domain2)))));

	var little_up1= (T([0,1,2])([9.5,0,0.3])(S([0,1])([0.6,2])(R([0,1])([PI/2])(MAP(lineUp1)(domain2)))));

	var little_up2= (T([0,1,2])([9.5,2,0.3])(S([0,1])([0.6,2])(R([0,1])([PI/2])(MAP(lineUp1)(domain2)))));

	//var little_up3= T([0,2])([0,-1])(R([1,2])([PI/2])(S([0,2])([0.3,0.1])(mlineOrz1)));

	var little_up3 = T([0,1,2])([1.1,0,-0.3])(S([0,1,2])([0.6,0.6,0.3])(R([1,2])([PI/2])(mlineOrz1)));

	var little_up4 = T([0,1,2])([1.1,3,-0.3])(S([0,1,2])([0.6,0.6,0.3])(R([1,2])([PI/2])(mlineOrz1)));

	var little_up5 = T([0,1,2])([1.1,0,-0.3])(S([0,1,2])([0.6,0.3,0.3])(R([0,1])([PI/2])(R([1,2])([PI/2])(mlineOrz1))));

	var little_up6 = T([0])([6])(little_up5);

	var little_up =T([0])([-0.1])(STRUCT([little_up1, little_up0,little_up2, little_up3, little_up4, little_up5, little_up6]));

	



 
//Rull


	 
	var controlPoints30 = ([[4,4,0],[6,4,0],[0,0,0],[0,0,0]]);
	 
	var controlPoints40 =  ([[4,2,0],[6,2,0],[0,4,0],[0,-4,0]]);
	 
	var c30 = CUBIC_HERMITE(S0)(controlPoints30);
	 
	var c40 = CUBIC_HERMITE(S0)(controlPoints40);
	 
	var block20 = CUBIC_HERMITE(S1)([c30,c40,[0,0,0],[0,0,0]]);
	 
	var mblock20 = MAP(block20)(domain2);
	 


	var rullino = STRUCT([mblock20]);

	var rullino1= T([0,1,2])([-0.8,4,0.3])(S([0,1,2])([0.6,0.5,0.7])(R([0,1])([3*PI/2])(rullino)));

	var rullino3 = T([0])([-0.4])(rullino1);
	 
	var rullino2= T([0,2])([-0.3,0.7])(R([0,2])([PI/2])(rullino1));


	var close_rull = CYL_SURFACE([0.4])([]);

	var closerull_up = (T([2])([1])(DISK ([0.4])([35])));

	var closer = COLOR ([0,0,0])(T([0,1])([0.3,1.5])(R([0,2])([-PI/4])(S([2])([0.6])(STRUCT([close_rull, closerull_up])))));

	var upperBlock = (STRUCT([rullino3,rullino2, closer]));





	var shell =STRUCT([angles, angles_up_little,underBlock5, line_up, front, little_up, upperBlock, line_up, front,retro, little_up,  upperBlock])

	return shell;
}





//buttons_iso

function botton () {

	var model4 = CYL_SURFACE([1.5])([25]);

	var model4_up = COLOR([0.8,0.3,0.9,0.9])(T([2])([1])(DISK ([1.5])([25])));

	var bott = (STRUCT([model4, model4_up]));

	var botton1= T([0,1])([8,2])(bott);

	var botton11 = S([0,1,2])([0.5,0.5,0.3])(botton1);

	var botton111 = T([0,1])([4,1])(botton11);

	var botton2 = S([0,1,2])([0.3,0.3,0.2])(botton1);

	var botton22 = T([0,1])([4,1])(botton2);

	var controlPoint100 = [[0,0,0],[0,0.5,0],[0,0,1],[0,0,-1]];

	var c100 = CUBIC_HERMITE(S0)(controlPoint100); 

	var controlPoint300 = [[0.2,0,0],[0.2,0.5,0],[0,0,1],[0,0,-1]];

	var c300 = CUBIC_HERMITE(S0)(controlPoint300); 
	 

	var bottblocco300 = CUBIC_HERMITE(S1)([c100,c300,[1,0,1],[1,0,1]]);

	var bottdisBlocco300 = (MAP(bottblocco300)(domain2));
	 
	var bottdisBlocco300_1= T([1])([0.5])(R([1,2])([PI])(bottdisBlocco300))

	var botton_6= (T([0,1,2])([9.7,2.3,0])(S([0,1,2])([1.5,1.5,2])(R([0,1])([PI/4])(R([0,1])([PI/2])(R([0,2])([-PI/2])(STRUCT([ bottdisBlocco300,bottdisBlocco300_1])))))));
	var botton_6_1=R([0,1])([PI/2])(botton_6)


	var domainAA = DOMAIN([[0,1],[0,2*PI]])([20,20]);
	var profile_taste = BEZIER(S0)([[0.2,0,0],[0.2,0.5,0],[0,0,1],[0,0,-0.1]]);
	var mapping_taste = ROTATIONAL_SURFACE(profile_taste);
	var surface_taste =T([0,1,2])([9.4,2,0])(S([2])([0.9])( MAP(mapping_taste)(domainAA)));

	//var botton_7 =T([2])([0.1])(botton_6);

	var taste = STRUCT([botton_6, surface_taste])
	//DRAW(botton_6)

	var botton_iso = STRUCT([botton111, botton22])

	var  botton = (STRUCT([taste,botton_iso]));

	return botton;

	
}

//Lens
function lens () {

	//var model77 = CYL_SURFACE(5)(0.1);

	//var lens1 = R([1,2])([PI/2])(model77)

	//var lens11 = S([0,1,2])([2,5,2])(lens1)

	//var lens111 = T([0,1,2])([3,5,-2])(lens11)

	//var lens= STRUCT([lens111])

	

	var controlPoint100 = [[0,0,0],[0,0.5,0],[0,0,1],[0,0,-1]];

	var c100 = CUBIC_HERMITE(S0)(controlPoint100); 

	var controlPoint200 = [[0,0,0],[0,0.5,0],[0,0,-1],[0,0,1]];

	var c200 = CUBIC_HERMITE(S0)(controlPoint200); 

	var blocco100 = CUBIC_HERMITE(S1)([c100,c200,[0,0,0],[0,0,0]]);

	var disBlocco100 = COLOR([0,0,0.8,0.8])(MAP(blocco100)(domain2));

	var controlPoint300 = [[0.2,0,0],[0.2,0.5,0],[0,0,1],[0,0,-1]];

	var c300 = CUBIC_HERMITE(S0)(controlPoint300); 

	var controlPoint400 = [[0.2,0,0],[0.2,0.5,0],[0.2,0,-1],[0,0,1]];

	var c400 = (CUBIC_HERMITE(S0)(controlPoint400)); 

	var blocco200 = CUBIC_HERMITE(S1)([c300,c400,[0,0,0],[0,0,0]]);

	var disBlocco200 = (MAP(blocco200)(domain2));

	var blocco300 = CUBIC_HERMITE(S1)([c100,c300,[0,0,0],[0,0,0]]);

	var disBlocco300 = (MAP(blocco300)(domain2));
	 
	var blocco400 = CUBIC_HERMITE(S1)([c200,c400,[0,0,0],[0,0,0]]);

	var disBlocco400 = (MAP(blocco400)(domain2));
	 
	var lens = STRUCT([disBlocco100,  disBlocco300, disBlocco400]);

	var lens1 = S([0,1,2])([8,7,7])(lens);

	var lens2 = R([0,1])([-PI/2])(lens1);

	var  lens3 = (T([0,1,2])([2.2,4,-3.2])(lens2));
	 
	//var tasto2 = T([1])([0.8])(tasto);
	 
	//var tasti = STRUCT([tasto, tasto2]);
	 
	//tasti = T([0,1,2])([-0.2,15,-0.5])(tasti);

	var mod = STRUCT([CYL_SURFACE([1.80])([25])]);

	var mod1= S([1])([0.4])(T([0,1,2])([3.97,8,-3.2])(R([1,2])([PI/2])(mod)));

	var mod2 =COLOR([0,0,0,1])(S([1])([0.4])(T([0,1,2])([3.97,11,-3.2])(R([1,2])([PI/2])(STRUCT([CYL_SURFACE([1.80])([60])])))));

	var mod3 =COLOR([0,0,0,1])(S([1])([0.4])(T([0,1,2])([3.97,9,-3.2])(R([1,2])([PI/2])(STRUCT([CYL_SURFACE([1.80])([100])])))));

	var mod4 =(S([1])([0.4])(T([0,1,2])([3.97,7,-3.2])(R([1,2])([PI/2])(STRUCT([CYL_SURFACE([1.80])([100])])))));

			var domainB = DOMAIN([[0,PI],[0,PI]])([24,36]);
			var mapping = function (v) {
			var a = v[0];
			var b = v[1];

			var u = SIN(a)*COS(b);
			var v = SIN(a)*SIN(b);
			var w = COS(a);

			return[u,v,w];
			}

	var boll_2 = COLOR([1,0,0])(T([0,1,2])([5.2,3,-2])(R([0,2])([-PI/4])(R([0,1])([-PI/2])(S([0,1,2])([0.2,0.2,0.2])(MAP(mapping)(domainB))))));
	

	var lens4=T([1])([0.7])(STRUCT([lens3,mod1,mod2,mod3,mod4, boll_2]));

	

	 
		return lens4;
}


function lever (){ 
	//Lever Gray
	var controlLever1 = ([[0,1,0],[2,3,0]]);
	 
	var controlLever2=  ([[1.5,0,0],[2,2,0]]);
	 
	var l1 = BEZIER(S0)(controlLever1);
	 
	var l2 = BEZIER(S0)(controlLever2);
	 
	var lever_down = CUBIC_HERMITE(S1)([l1,l2,[0,0,0],[0,0,0]]);
	 
	var lever_down1 = STRUCT([MAP(lever_down)(domain2)]);


	 var controlLever3 = ([[0,1,0.5],[2,3,0.5]]);
	 
	var controlLever4 =  ([[1.5,0,0.5],[2,2,0.5]]);
	 
	var l3 = BEZIER(S0)(controlLever3);
	 
	var l4 = BEZIER(S0)(controlLever4);
	 
	var lever_up = CUBIC_HERMITE(S1)([l3,l4,[0,0,0],[0,0,0]]);
	 
	var lever_up1 = STRUCT([MAP(lever_up)(domain2)]);

	var lever_side1 = CUBIC_HERMITE(S1)([l2,l4,[0,0,0],[0,0,0]]);
	 
	var lever_side4 = STRUCT([MAP(lever_side1)(domain2)]);

	var lever_side2 = CUBIC_HERMITE(S1)([l1,l3,[0,0,0],[0,0,0]]);
	 
	var lever_side3 = STRUCT([MAP(lever_side2)(domain2)]);


	//In _black_lever
	var controlLever5 = ([[2,3,0],[4,2.5,0]]);
	 
	var controlLever6 =  ([[2,2,0],[4,2.5,0]]);

	var l5 = BEZIER(S0)(controlLever5);
	 
	var l6 = BEZIER(S0)(controlLever6);

	var controlLever7 = ([[2,3,0.5],[4,2.5,0.5]]);
	 
	var controlLever8 =  ([[2,2,0.5],[4,2.5,0.5]]);

	var l7 = BEZIER(S0)(controlLever7);
	 
	var l8 = BEZIER(S0)(controlLever8);

	var lever_5 = CUBIC_HERMITE(S1)([l5,l6,[0,0,0],[0,0,0]]);
	var lever_6 = CUBIC_HERMITE(S1)([l7,l8,[0,0,0],[0,0,0]]);
	var lever_7 = CUBIC_HERMITE(S1)([l5,l7,[0,0,0],[0,0,0]]);
	var lever_8 = CUBIC_HERMITE(S1)([l6,l8,[0,0,0],[0,0,0]]);

	var lever_side5 = STRUCT([MAP(lever_5)(domain2)]);
	var lever_side6 = STRUCT([MAP(lever_6)(domain2)]);
	var lever_side7 = STRUCT([MAP(lever_7)(domain2)]);
	var lever_side8 = STRUCT([MAP(lever_8)(domain2)]);

	var controlLever10 = ([[4,4,0],[6,4,0],[0,0,0],[0,0,0]]);
	 
	var controlLever11 =  ([[4,2,0],[6,2,0],[0,4,0],[0,-4,0]]);

	var controlLever12 = ([[4,4,0.5],[6,4,0.5],[0,0,0.5],[0,0,0.5]]);
	 
	var controlLever13 =  ([[4,2,0.5],[6,2,0.5],[0,4,0.5],[0,-4,0.5]]);
	 
	var l10 = CUBIC_HERMITE(S0)(controlLever10);
	 
	var l11 = CUBIC_HERMITE(S0)(controlLever11);

	var l12 = CUBIC_HERMITE(S0)(controlLever12);

	var l13 = CUBIC_HERMITE(S0)(controlLever13);
	 
	var lever_block20 = CUBIC_HERMITE(S1)([l10,l11,[0,0,0],[0,0,0]]);
	var lever_block21 = CUBIC_HERMITE(S1)([l12,l13,[0,0,0],[0,0,0]]);
	var lever_block22 = CUBIC_HERMITE(S1)([l10,l12,[0,0,0],[0,0,0]]);
	var lever_block23 = CUBIC_HERMITE(S1)([l13,l11,[0,0,0],[0,0,0]]);

	 
	var mlblock20 = MAP(lever_block20)(domain2);
	var mlblock21 = MAP(lever_block21)(domain2);
	var mlblock22 = MAP(lever_block22)(domain2);
	var mlblock23 = MAP(lever_block23)(domain2);

	var a_lever = T([0,1])([-3.2,2.2])(R([0,1])([-PI/4])(S([0,1])([0.9,0.5])(STRUCT([mlblock20,mlblock21,mlblock22,mlblock23]))));

	var a_lever1= T([0,1])([-0.4,0.3])(a_lever)

	var lever55 =COLOR([0,0,0]) (STRUCT([ lever_side5,lever_side6, lever_side7,lever_side8]))
	var lever66= STRUCT([lever_down1,lever_up1, lever_side4,lever_side3])

	var lever=(T([0,1,2])([9.5,2,0])(R([0,1])([PI])(S([0,1,2])([0.6,0.6,0.5])(STRUCT([lever66,lever55, a_lever1 ])))))
	
	return lever;
}

//LOGO

function logo (){
	var r=COLOR([1,0,0])(DISK([0.5])(80));

	var logo1= T([0,1,2])([5.8,3.1,-0.4])(R([1,2])([PI/2])(r));

	return logo1;

}

var shell1= shell();
var botton1= botton();
var lens1 = lens();
var logo1 = logo();
var lever1= lever();

var model = STRUCT([shell1, botton1, lens1, logo1, lever1])




