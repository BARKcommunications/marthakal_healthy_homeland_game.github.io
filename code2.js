gdjs.basketball_95gameCode = {};
gdjs.basketball_95gameCode.localVariables = [];
gdjs.basketball_95gameCode.idToCallbackMap = new Map();
gdjs.basketball_95gameCode.GDbinObjects1= [];
gdjs.basketball_95gameCode.GDbinObjects2= [];
gdjs.basketball_95gameCode.GDbinObjects3= [];
gdjs.basketball_95gameCode.GDbasketballObjects1= [];
gdjs.basketball_95gameCode.GDbasketballObjects2= [];
gdjs.basketball_95gameCode.GDbasketballObjects3= [];
gdjs.basketball_95gameCode.GDfloorObjects1= [];
gdjs.basketball_95gameCode.GDfloorObjects2= [];
gdjs.basketball_95gameCode.GDfloorObjects3= [];
gdjs.basketball_95gameCode.GDwallObjects1= [];
gdjs.basketball_95gameCode.GDwallObjects2= [];
gdjs.basketball_95gameCode.GDwallObjects3= [];
gdjs.basketball_95gameCode.GDbin_9595topObjects1= [];
gdjs.basketball_95gameCode.GDbin_9595topObjects2= [];
gdjs.basketball_95gameCode.GDbin_9595topObjects3= [];
gdjs.basketball_95gameCode.GDswipeObjects1= [];
gdjs.basketball_95gameCode.GDswipeObjects2= [];
gdjs.basketball_95gameCode.GDswipeObjects3= [];
gdjs.basketball_95gameCode.GDCartoonSmokeObjects1= [];
gdjs.basketball_95gameCode.GDCartoonSmokeObjects2= [];
gdjs.basketball_95gameCode.GDCartoonSmokeObjects3= [];
gdjs.basketball_95gameCode.GDbasketball_9595hoopObjects1= [];
gdjs.basketball_95gameCode.GDbasketball_9595hoopObjects2= [];
gdjs.basketball_95gameCode.GDbasketball_9595hoopObjects3= [];
gdjs.basketball_95gameCode.GDRedExplosionObjects1= [];
gdjs.basketball_95gameCode.GDRedExplosionObjects2= [];
gdjs.basketball_95gameCode.GDRedExplosionObjects3= [];


gdjs.basketball_95gameCode.mapOfEmptyGDbasketballObjects = Hashtable.newFrom({"basketball": []});
gdjs.basketball_95gameCode.mapOfGDgdjs_9546basketball_959595gameCode_9546GDbasketballObjects2Objects = Hashtable.newFrom({"basketball": gdjs.basketball_95gameCode.GDbasketballObjects2});
gdjs.basketball_95gameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21681100);
}
if (isConditionTrue_0) {
gdjs.basketball_95gameCode.GDbasketballObjects2.length = 0;

{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.basketball_95gameCode.mapOfGDgdjs_9546basketball_959595gameCode_9546GDbasketballObjects2Objects, 1000, 360, "Interactive");
}
{for(var i = 0, len = gdjs.basketball_95gameCode.GDbasketballObjects2.length ;i < len;++i) {
    gdjs.basketball_95gameCode.GDbasketballObjects2[i].getBehavior("Scale").setScale(0.25);
}
}
{for(var i = 0, len = gdjs.basketball_95gameCode.GDbasketballObjects2.length ;i < len;++i) {
    gdjs.basketball_95gameCode.GDbasketballObjects2[i].getBehavior("Physics2").setStatic();
}
}
}

}


};gdjs.basketball_95gameCode.mapOfEmptyGDbasketballObjects = Hashtable.newFrom({"basketball": []});
gdjs.basketball_95gameCode.mapOfEmptyGDbasketballObjects = Hashtable.newFrom({"basketball": []});
gdjs.basketball_95gameCode.mapOfGDgdjs_9546basketball_959595gameCode_9546GDbasketballObjects1Objects = Hashtable.newFrom({"basketball": gdjs.basketball_95gameCode.GDbasketballObjects1});
gdjs.basketball_95gameCode.mapOfGDgdjs_9546basketball_959595gameCode_9546GDbin_95959595topObjects1Objects = Hashtable.newFrom({"bin_top": gdjs.basketball_95gameCode.GDbin_9595topObjects1});
gdjs.basketball_95gameCode.mapOfGDgdjs_9546basketball_959595gameCode_9546GDRedExplosionObjects1Objects = Hashtable.newFrom({"RedExplosion": gdjs.basketball_95gameCode.GDRedExplosionObjects1});
gdjs.basketball_95gameCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(3).getAsBoolean();
}
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.basketball_95gameCode.mapOfEmptyGDbasketballObjects) == 0;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}

{ //Subevents
gdjs.basketball_95gameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.basketball_95gameCode.mapOfEmptyGDbasketballObjects) > 0;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).add(0.1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.basketball_95gameCode.mapOfEmptyGDbasketballObjects) > 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21683700);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("basketball"), gdjs.basketball_95gameCode.GDbasketballObjects2);
gdjs.copyArray(runtimeScene.getObjects("swipe"), gdjs.basketball_95gameCode.GDswipeObjects2);
{for(var i = 0, len = gdjs.basketball_95gameCode.GDbasketballObjects2.length ;i < len;++i) {
    gdjs.basketball_95gameCode.GDbasketballObjects2[i].getBehavior("Physics2").setDynamic();
}
}
{for(var i = 0, len = gdjs.basketball_95gameCode.GDbasketballObjects2.length ;i < len;++i) {
    gdjs.basketball_95gameCode.GDbasketballObjects2[i].getBehavior("Physics2").applyPolarImpulse(gdjs.evtTools.common.angleBetweenPositions(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0)), runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() * 0.25, (gdjs.basketball_95gameCode.GDbasketballObjects2[i].getBehavior("Physics2").getMassCenterX()), (gdjs.basketball_95gameCode.GDbasketballObjects2[i].getBehavior("Physics2").getMassCenterY()));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}
{for(var i = 0, len = gdjs.basketball_95gameCode.GDswipeObjects2.length ;i < len;++i) {
    gdjs.basketball_95gameCode.GDswipeObjects2[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("basketball"), gdjs.basketball_95gameCode.GDbasketballObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.basketball_95gameCode.GDbasketballObjects2.length;i<l;++i) {
    if ( gdjs.basketball_95gameCode.GDbasketballObjects2[i].getBehavior("Physics2").getLinearVelocityLength() < 100 ) {
        isConditionTrue_0 = true;
        gdjs.basketball_95gameCode.GDbasketballObjects2[k] = gdjs.basketball_95gameCode.GDbasketballObjects2[i];
        ++k;
    }
}
gdjs.basketball_95gameCode.GDbasketballObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21684764);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("swipe"), gdjs.basketball_95gameCode.GDswipeObjects2);
{for(var i = 0, len = gdjs.basketball_95gameCode.GDswipeObjects2.length ;i < len;++i) {
    gdjs.basketball_95gameCode.GDswipeObjects2[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("basketball"), gdjs.basketball_95gameCode.GDbasketballObjects1);
gdjs.copyArray(runtimeScene.getObjects("bin_top"), gdjs.basketball_95gameCode.GDbin_9595topObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.basketball_95gameCode.mapOfGDgdjs_9546basketball_959595gameCode_9546GDbasketballObjects1Objects, gdjs.basketball_95gameCode.mapOfGDgdjs_9546basketball_959595gameCode_9546GDbin_95959595topObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16674092);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.basketball_95gameCode.GDbasketballObjects1 */
gdjs.basketball_95gameCode.GDRedExplosionObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.basketball_95gameCode.mapOfGDgdjs_9546basketball_959595gameCode_9546GDRedExplosionObjects1Objects, (( gdjs.basketball_95gameCode.GDbasketballObjects1.length === 0 ) ? 0 :gdjs.basketball_95gameCode.GDbasketballObjects1[0].getPointX("")), (( gdjs.basketball_95gameCode.GDbasketballObjects1.length === 0 ) ? 0 :gdjs.basketball_95gameCode.GDbasketballObjects1[0].getPointY("")), "Interactive");
}
{runtimeScene.getScene().getVariables().getFromIndex(4).add(1);
}
}

}


};gdjs.basketball_95gameCode.mapOfGDgdjs_9546basketball_959595gameCode_9546GDbasketballObjects1Objects = Hashtable.newFrom({"basketball": gdjs.basketball_95gameCode.GDbasketballObjects1});
gdjs.basketball_95gameCode.mapOfGDgdjs_9546basketball_959595gameCode_9546GDfloorObjects1Objects = Hashtable.newFrom({"floor": gdjs.basketball_95gameCode.GDfloorObjects1});
gdjs.basketball_95gameCode.mapOfGDgdjs_9546basketball_959595gameCode_9546GDCartoonSmokeObjects1Objects = Hashtable.newFrom({"CartoonSmoke": gdjs.basketball_95gameCode.GDCartoonSmokeObjects1});
gdjs.basketball_95gameCode.eventsList2 = function(runtimeScene) {

{


gdjs.basketball_95gameCode.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("basketball"), gdjs.basketball_95gameCode.GDbasketballObjects1);
gdjs.copyArray(runtimeScene.getObjects("floor"), gdjs.basketball_95gameCode.GDfloorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.basketball_95gameCode.mapOfGDgdjs_9546basketball_959595gameCode_9546GDbasketballObjects1Objects, "Physics2", gdjs.basketball_95gameCode.mapOfGDgdjs_9546basketball_959595gameCode_9546GDfloorObjects1Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21687140);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.basketball_95gameCode.GDbasketballObjects1 */
gdjs.basketball_95gameCode.GDCartoonSmokeObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.basketball_95gameCode.mapOfGDgdjs_9546basketball_959595gameCode_9546GDCartoonSmokeObjects1Objects, (( gdjs.basketball_95gameCode.GDbasketballObjects1.length === 0 ) ? 0 :gdjs.basketball_95gameCode.GDbasketballObjects1[0].getPointX("")), (( gdjs.basketball_95gameCode.GDbasketballObjects1.length === 0 ) ? 0 :gdjs.basketball_95gameCode.GDbasketballObjects1[0].getPointY("")), "Interactive");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("basketball"), gdjs.basketball_95gameCode.GDbasketballObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.basketball_95gameCode.GDbasketballObjects1.length;i<l;++i) {
    if ( !(gdjs.basketball_95gameCode.GDbasketballObjects1[i].getBehavior("InOnScreen").IsOnScreen(0, null)) ) {
        isConditionTrue_0 = true;
        gdjs.basketball_95gameCode.GDbasketballObjects1[k] = gdjs.basketball_95gameCode.GDbasketballObjects1[i];
        ++k;
    }
}
gdjs.basketball_95gameCode.GDbasketballObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.basketball_95gameCode.GDbasketballObjects1 */
{for(var i = 0, len = gdjs.basketball_95gameCode.GDbasketballObjects1.length ;i < len;++i) {
    gdjs.basketball_95gameCode.GDbasketballObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16840340);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
}

}


};

gdjs.basketball_95gameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.basketball_95gameCode.GDbinObjects1.length = 0;
gdjs.basketball_95gameCode.GDbinObjects2.length = 0;
gdjs.basketball_95gameCode.GDbinObjects3.length = 0;
gdjs.basketball_95gameCode.GDbasketballObjects1.length = 0;
gdjs.basketball_95gameCode.GDbasketballObjects2.length = 0;
gdjs.basketball_95gameCode.GDbasketballObjects3.length = 0;
gdjs.basketball_95gameCode.GDfloorObjects1.length = 0;
gdjs.basketball_95gameCode.GDfloorObjects2.length = 0;
gdjs.basketball_95gameCode.GDfloorObjects3.length = 0;
gdjs.basketball_95gameCode.GDwallObjects1.length = 0;
gdjs.basketball_95gameCode.GDwallObjects2.length = 0;
gdjs.basketball_95gameCode.GDwallObjects3.length = 0;
gdjs.basketball_95gameCode.GDbin_9595topObjects1.length = 0;
gdjs.basketball_95gameCode.GDbin_9595topObjects2.length = 0;
gdjs.basketball_95gameCode.GDbin_9595topObjects3.length = 0;
gdjs.basketball_95gameCode.GDswipeObjects1.length = 0;
gdjs.basketball_95gameCode.GDswipeObjects2.length = 0;
gdjs.basketball_95gameCode.GDswipeObjects3.length = 0;
gdjs.basketball_95gameCode.GDCartoonSmokeObjects1.length = 0;
gdjs.basketball_95gameCode.GDCartoonSmokeObjects2.length = 0;
gdjs.basketball_95gameCode.GDCartoonSmokeObjects3.length = 0;
gdjs.basketball_95gameCode.GDbasketball_9595hoopObjects1.length = 0;
gdjs.basketball_95gameCode.GDbasketball_9595hoopObjects2.length = 0;
gdjs.basketball_95gameCode.GDbasketball_9595hoopObjects3.length = 0;
gdjs.basketball_95gameCode.GDRedExplosionObjects1.length = 0;
gdjs.basketball_95gameCode.GDRedExplosionObjects2.length = 0;
gdjs.basketball_95gameCode.GDRedExplosionObjects3.length = 0;

gdjs.basketball_95gameCode.eventsList2(runtimeScene);
gdjs.basketball_95gameCode.GDbinObjects1.length = 0;
gdjs.basketball_95gameCode.GDbinObjects2.length = 0;
gdjs.basketball_95gameCode.GDbinObjects3.length = 0;
gdjs.basketball_95gameCode.GDbasketballObjects1.length = 0;
gdjs.basketball_95gameCode.GDbasketballObjects2.length = 0;
gdjs.basketball_95gameCode.GDbasketballObjects3.length = 0;
gdjs.basketball_95gameCode.GDfloorObjects1.length = 0;
gdjs.basketball_95gameCode.GDfloorObjects2.length = 0;
gdjs.basketball_95gameCode.GDfloorObjects3.length = 0;
gdjs.basketball_95gameCode.GDwallObjects1.length = 0;
gdjs.basketball_95gameCode.GDwallObjects2.length = 0;
gdjs.basketball_95gameCode.GDwallObjects3.length = 0;
gdjs.basketball_95gameCode.GDbin_9595topObjects1.length = 0;
gdjs.basketball_95gameCode.GDbin_9595topObjects2.length = 0;
gdjs.basketball_95gameCode.GDbin_9595topObjects3.length = 0;
gdjs.basketball_95gameCode.GDswipeObjects1.length = 0;
gdjs.basketball_95gameCode.GDswipeObjects2.length = 0;
gdjs.basketball_95gameCode.GDswipeObjects3.length = 0;
gdjs.basketball_95gameCode.GDCartoonSmokeObjects1.length = 0;
gdjs.basketball_95gameCode.GDCartoonSmokeObjects2.length = 0;
gdjs.basketball_95gameCode.GDCartoonSmokeObjects3.length = 0;
gdjs.basketball_95gameCode.GDbasketball_9595hoopObjects1.length = 0;
gdjs.basketball_95gameCode.GDbasketball_9595hoopObjects2.length = 0;
gdjs.basketball_95gameCode.GDbasketball_9595hoopObjects3.length = 0;
gdjs.basketball_95gameCode.GDRedExplosionObjects1.length = 0;
gdjs.basketball_95gameCode.GDRedExplosionObjects2.length = 0;
gdjs.basketball_95gameCode.GDRedExplosionObjects3.length = 0;


return;

}

gdjs['basketball_95gameCode'] = gdjs.basketball_95gameCode;
