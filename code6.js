gdjs.car_95driving_95gameCode = {};
gdjs.car_95driving_95gameCode.localVariables = [];
gdjs.car_95driving_95gameCode.idToCallbackMap = new Map();
gdjs.car_95driving_95gameCode.GDcarObjects1= [];
gdjs.car_95driving_95gameCode.GDcarObjects2= [];
gdjs.car_95driving_95gameCode.GDroadObjects1= [];
gdjs.car_95driving_95gameCode.GDroadObjects2= [];
gdjs.car_95driving_95gameCode.GDcameraObjects1= [];
gdjs.car_95driving_95gameCode.GDcameraObjects2= [];
gdjs.car_95driving_95gameCode.GDlookatObjects1= [];
gdjs.car_95driving_95gameCode.GDlookatObjects2= [];
gdjs.car_95driving_95gameCode.GDtreeObjects1= [];
gdjs.car_95driving_95gameCode.GDtreeObjects2= [];
gdjs.car_95driving_95gameCode.GDTree_9595ExplodeObjects1= [];
gdjs.car_95driving_95gameCode.GDTree_9595ExplodeObjects2= [];
gdjs.car_95driving_95gameCode.GDpuddleObjects1= [];
gdjs.car_95driving_95gameCode.GDpuddleObjects2= [];
gdjs.car_95driving_95gameCode.GDpuddle_9595splashObjects1= [];
gdjs.car_95driving_95gameCode.GDpuddle_9595splashObjects2= [];
gdjs.car_95driving_95gameCode.GDdistanceObjects1= [];
gdjs.car_95driving_95gameCode.GDdistanceObjects2= [];
gdjs.car_95driving_95gameCode.GDsmokeObjects1= [];
gdjs.car_95driving_95gameCode.GDsmokeObjects2= [];
gdjs.car_95driving_95gameCode.GDdamageObjects1= [];
gdjs.car_95driving_95gameCode.GDdamageObjects2= [];
gdjs.car_95driving_95gameCode.GDPaper_9595Bark_9595VideoObjects1= [];
gdjs.car_95driving_95gameCode.GDPaper_9595Bark_9595VideoObjects2= [];
gdjs.car_95driving_95gameCode.GDGerms_9595VideoObjects1= [];
gdjs.car_95driving_95gameCode.GDGerms_9595VideoObjects2= [];
gdjs.car_95driving_95gameCode.GDRiver_9595StoryObjects1= [];
gdjs.car_95driving_95gameCode.GDRiver_9595StoryObjects2= [];
gdjs.car_95driving_95gameCode.GDWhere_9595do_9595germs_9595live_9595and_9595breedObjects1= [];
gdjs.car_95driving_95gameCode.GDWhere_9595do_9595germs_9595live_9595and_9595breedObjects2= [];
gdjs.car_95driving_95gameCode.GDcar_9595game_9595introObjects1= [];
gdjs.car_95driving_95gameCode.GDcar_9595game_9595introObjects2= [];
gdjs.car_95driving_95gameCode.GDQuest_9595TextObjects1= [];
gdjs.car_95driving_95gameCode.GDQuest_9595TextObjects2= [];
gdjs.car_95driving_95gameCode.GDSmallGreenButtonObjects1= [];
gdjs.car_95driving_95gameCode.GDSmallGreenButtonObjects2= [];


gdjs.car_95driving_95gameCode.mapOfGDgdjs_9546car_959595driving_959595gameCode_9546GDcar_95959595game_95959595introObjects1Objects = Hashtable.newFrom({"car_game_intro": gdjs.car_95driving_95gameCode.GDcar_9595game_9595introObjects1});
gdjs.car_95driving_95gameCode.mapOfGDgdjs_9546car_959595driving_959595gameCode_9546GDcarObjects1Objects = Hashtable.newFrom({"car": gdjs.car_95driving_95gameCode.GDcarObjects1});
gdjs.car_95driving_95gameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Quest_Text"), gdjs.car_95driving_95gameCode.GDQuest_9595TextObjects1);
{for(var i = 0, len = gdjs.car_95driving_95gameCode.GDQuest_9595TextObjects1.length ;i < len;++i) {
    gdjs.car_95driving_95gameCode.GDQuest_9595TextObjects1[i].getBehavior("Text").setText("'Dodge the puddles and trees!\nThese will damage the car and \nmake for a bumpy ride!'");
}
}
{for(var i = 0, len = gdjs.car_95driving_95gameCode.GDQuest_9595TextObjects1.length ;i < len;++i) {
    gdjs.car_95driving_95gameCode.GDQuest_9595TextObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - (gdjs.car_95driving_95gameCode.GDQuest_9595TextObjects1[i].getAABBCenterY()) / 2);
}
}
}

}


};gdjs.car_95driving_95gameCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "quest_intructions", 0, 0, 0);
}

{ //Subevents
gdjs.car_95driving_95gameCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.car_95driving_95gameCode.mapOfGDgdjs_9546car_959595driving_959595gameCode_9546GDcameraObjects1Objects = Hashtable.newFrom({"camera": gdjs.car_95driving_95gameCode.GDcameraObjects1});
gdjs.car_95driving_95gameCode.mapOfGDgdjs_9546car_959595driving_959595gameCode_9546GDtreeObjects1Objects = Hashtable.newFrom({"tree": gdjs.car_95driving_95gameCode.GDtreeObjects1});
gdjs.car_95driving_95gameCode.mapOfGDgdjs_9546car_959595driving_959595gameCode_9546GDtreeObjects1Objects = Hashtable.newFrom({"tree": gdjs.car_95driving_95gameCode.GDtreeObjects1});
gdjs.car_95driving_95gameCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("road"), gdjs.car_95driving_95gameCode.GDroadObjects1);
gdjs.car_95driving_95gameCode.GDtreeObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.car_95driving_95gameCode.mapOfGDgdjs_9546car_959595driving_959595gameCode_9546GDtreeObjects1Objects, gdjs.randomFloatInRange((( gdjs.car_95driving_95gameCode.GDroadObjects1.length === 0 ) ? 0 :gdjs.car_95driving_95gameCode.GDroadObjects1[0].getAABBLeft()), ((( gdjs.car_95driving_95gameCode.GDroadObjects1.length === 0 ) ? 0 :gdjs.car_95driving_95gameCode.GDroadObjects1[0].getAABBLeft()) + (( gdjs.car_95driving_95gameCode.GDroadObjects1.length === 0 ) ? 0 :gdjs.car_95driving_95gameCode.GDroadObjects1[0].getAABBRight())) / 2 - 250), -(150), "Car");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.car_95driving_95gameCode.mapOfGDgdjs_9546car_959595driving_959595gameCode_9546GDtreeObjects1Objects, gdjs.randomFloatInRange(((( gdjs.car_95driving_95gameCode.GDroadObjects1.length === 0 ) ? 0 :gdjs.car_95driving_95gameCode.GDroadObjects1[0].getAABBLeft()) + (( gdjs.car_95driving_95gameCode.GDroadObjects1.length === 0 ) ? 0 :gdjs.car_95driving_95gameCode.GDroadObjects1[0].getAABBRight())) / 2 + 150, (( gdjs.car_95driving_95gameCode.GDroadObjects1.length === 0 ) ? 0 :gdjs.car_95driving_95gameCode.GDroadObjects1[0].getAABBRight())), -(150), "Car");
}
{for(var i = 0, len = gdjs.car_95driving_95gameCode.GDtreeObjects1.length ;i < len;++i) {
    gdjs.car_95driving_95gameCode.GDtreeObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.randomFloatInRange(0, 4));
}
}
{for(var i = 0, len = gdjs.car_95driving_95gameCode.GDtreeObjects1.length ;i < len;++i) {
    gdjs.car_95driving_95gameCode.GDtreeObjects1[i].getBehavior("Physics3D").enableLayer(5, true);
}
}
{for(var i = 0, len = gdjs.car_95driving_95gameCode.GDtreeObjects1.length ;i < len;++i) {
    gdjs.car_95driving_95gameCode.GDtreeObjects1[i].getBehavior("Physics3D").setShapeScale(0.25);
}
}
}

}


};gdjs.car_95driving_95gameCode.mapOfGDgdjs_9546car_959595driving_959595gameCode_9546GDpuddleObjects1Objects = Hashtable.newFrom({"puddle": gdjs.car_95driving_95gameCode.GDpuddleObjects1});
gdjs.car_95driving_95gameCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("road"), gdjs.car_95driving_95gameCode.GDroadObjects1);
gdjs.car_95driving_95gameCode.GDpuddleObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.car_95driving_95gameCode.mapOfGDgdjs_9546car_959595driving_959595gameCode_9546GDpuddleObjects1Objects, gdjs.randomFloatInRange((( gdjs.car_95driving_95gameCode.GDroadObjects1.length === 0 ) ? 0 :gdjs.car_95driving_95gameCode.GDroadObjects1[0].getAABBLeft()) + (( gdjs.car_95driving_95gameCode.GDroadObjects1.length === 0 ) ? 0 :gdjs.car_95driving_95gameCode.GDroadObjects1[0].getAABBRight()) / 2.5, (( gdjs.car_95driving_95gameCode.GDroadObjects1.length === 0 ) ? 0 :gdjs.car_95driving_95gameCode.GDroadObjects1[0].getAABBRight()) / 2), -(150), "Car");
}
{for(var i = 0, len = gdjs.car_95driving_95gameCode.GDpuddleObjects1.length ;i < len;++i) {
    gdjs.car_95driving_95gameCode.GDpuddleObjects1[i].getBehavior("Scale").setScale(gdjs.randomFloatInRange(1, 3));
}
}
}

}


};gdjs.car_95driving_95gameCode.mapOfGDgdjs_9546car_959595driving_959595gameCode_9546GDcarObjects1Objects = Hashtable.newFrom({"car": gdjs.car_95driving_95gameCode.GDcarObjects1});
gdjs.car_95driving_95gameCode.mapOfGDgdjs_9546car_959595driving_959595gameCode_9546GDtreeObjects1Objects = Hashtable.newFrom({"tree": gdjs.car_95driving_95gameCode.GDtreeObjects1});
gdjs.car_95driving_95gameCode.mapOfGDgdjs_9546car_959595driving_959595gameCode_9546GDTree_95959595ExplodeObjects1Objects = Hashtable.newFrom({"Tree_Explode": gdjs.car_95driving_95gameCode.GDTree_9595ExplodeObjects1});
gdjs.car_95driving_95gameCode.mapOfGDgdjs_9546car_959595driving_959595gameCode_9546GDcarObjects1Objects = Hashtable.newFrom({"car": gdjs.car_95driving_95gameCode.GDcarObjects1});
gdjs.car_95driving_95gameCode.mapOfGDgdjs_9546car_959595driving_959595gameCode_9546GDpuddleObjects1Objects = Hashtable.newFrom({"puddle": gdjs.car_95driving_95gameCode.GDpuddleObjects1});
gdjs.car_95driving_95gameCode.mapOfGDgdjs_9546car_959595driving_959595gameCode_9546GDpuddle_95959595splashObjects1Objects = Hashtable.newFrom({"puddle_splash": gdjs.car_95driving_95gameCode.GDpuddle_9595splashObjects1});
gdjs.car_95driving_95gameCode.eventsList4 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("camera"), gdjs.car_95driving_95gameCode.GDcameraObjects1);
gdjs.copyArray(runtimeScene.getObjects("car"), gdjs.car_95driving_95gameCode.GDcarObjects1);
gdjs.copyArray(runtimeScene.getObjects("smoke"), gdjs.car_95driving_95gameCode.GDsmokeObjects1);
gdjs.car_95driving_95gameCode.GDcar_9595game_9595introObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.car_95driving_95gameCode.mapOfGDgdjs_9546car_959595driving_959595gameCode_9546GDcar_95959595game_95959595introObjects1Objects, 0, 0, "UI");
}
{for(var i = 0, len = gdjs.car_95driving_95gameCode.GDcar_9595game_9595introObjects1.length ;i < len;++i) {
    gdjs.car_95driving_95gameCode.GDcar_9595game_9595introObjects1[i].play();
}
}
{for(var i = 0, len = gdjs.car_95driving_95gameCode.GDcameraObjects1.length ;i < len;++i) {
    gdjs.car_95driving_95gameCode.GDcameraObjects1[i].rotateTowardObject((gdjs.car_95driving_95gameCode.GDcarObjects1.length !== 0 ? gdjs.car_95driving_95gameCode.GDcarObjects1[0] : null), 0, runtimeScene);
}
}
{for(var i = 0, len = gdjs.car_95driving_95gameCode.GDcameraObjects1.length ;i < len;++i) {
    gdjs.car_95driving_95gameCode.GDcameraObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.car_95driving_95gameCode.GDcarObjects1.length ;i < len;++i) {
    gdjs.car_95driving_95gameCode.GDcarObjects1[i].setAngle(-(90));
}
}
{for(var i = 0, len = gdjs.car_95driving_95gameCode.GDsmokeObjects1.length ;i < len;++i) {
    gdjs.car_95driving_95gameCode.GDsmokeObjects1[i].getBehavior("Sticker").Stick(gdjs.car_95driving_95gameCode.mapOfGDgdjs_9546car_959595driving_959595gameCode_9546GDcarObjects1Objects, null);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(12).setBoolean(true);
}
{for(var i = 0, len = gdjs.car_95driving_95gameCode.GDcarObjects1.length ;i < len;++i) {
    gdjs.car_95driving_95gameCode.GDcarObjects1[i].getBehavior("Physics3D").enableMask(5, true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("car_game_intro"), gdjs.car_95driving_95gameCode.GDcar_9595game_9595introObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.car_95driving_95gameCode.GDcar_9595game_9595introObjects1.length;i<l;++i) {
    if ( gdjs.car_95driving_95gameCode.GDcar_9595game_9595introObjects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs.car_95driving_95gameCode.GDcar_9595game_9595introObjects1[k] = gdjs.car_95driving_95gameCode.GDcar_9595game_9595introObjects1[i];
        ++k;
    }
}
gdjs.car_95driving_95gameCode.GDcar_9595game_9595introObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23327156);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.car_95driving_95gameCode.GDcar_9595game_9595introObjects1 */
{for(var i = 0, len = gdjs.car_95driving_95gameCode.GDcar_9595game_9595introObjects1.length ;i < len;++i) {
    gdjs.car_95driving_95gameCode.GDcar_9595game_9595introObjects1[i].deleteFromScene(runtimeScene);
}
}

{ //Subevents
gdjs.car_95driving_95gameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(12).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23329844);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "spawn_puddle");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "spawn_tree");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "distance");
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("camera"), gdjs.car_95driving_95gameCode.GDcameraObjects1);
gdjs.copyArray(runtimeScene.getObjects("car"), gdjs.car_95driving_95gameCode.GDcarObjects1);
{for(var i = 0, len = gdjs.car_95driving_95gameCode.GDcameraObjects1.length ;i < len;++i) {
    gdjs.car_95driving_95gameCode.GDcameraObjects1[i].rotateTowardObject((gdjs.car_95driving_95gameCode.GDcarObjects1.length !== 0 ? gdjs.car_95driving_95gameCode.GDcarObjects1[0] : null), 15, runtimeScene);
}
}
{gdjs.evtsExt__FirstPersonCamera__LookFrom3DObjectEyes.func(runtimeScene, gdjs.car_95driving_95gameCode.mapOfGDgdjs_9546car_959595driving_959595gameCode_9546GDcameraObjects1Objects, "Object3D", "Car", null);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("car"), gdjs.car_95driving_95gameCode.GDcarObjects1);
gdjs.copyArray(runtimeScene.getObjects("lookat"), gdjs.car_95driving_95gameCode.GDlookatObjects1);
{gdjs.scene3d.camera.turnCameraTowardObject(runtimeScene, (gdjs.car_95driving_95gameCode.GDlookatObjects1.length !== 0 ? gdjs.car_95driving_95gameCode.GDlookatObjects1[0] : null), "Car", 0, false);
}
{for(var i = 0, len = gdjs.car_95driving_95gameCode.GDcarObjects1.length ;i < len;++i) {
    gdjs.car_95driving_95gameCode.GDcarObjects1[i].getBehavior("Physics3D").setShapeScale(1);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("car"), gdjs.car_95driving_95gameCode.GDcarObjects1);
gdjs.copyArray(runtimeScene.getObjects("damage"), gdjs.car_95driving_95gameCode.GDdamageObjects1);
gdjs.copyArray(runtimeScene.getObjects("distance"), gdjs.car_95driving_95gameCode.GDdistanceObjects1);
{for(var i = 0, len = gdjs.car_95driving_95gameCode.GDdistanceObjects1.length ;i < len;++i) {
    gdjs.car_95driving_95gameCode.GDdistanceObjects1[i].getBehavior("Text").setText("Distance to go: " + gdjs.evtTools.common.toString(Math.ceil((60 - gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "distance")))));
}
}
{for(var i = 0, len = gdjs.car_95driving_95gameCode.GDdamageObjects1.length ;i < len;++i) {
    gdjs.car_95driving_95gameCode.GDdamageObjects1[i].getBehavior("Text").setText("Damage: " + gdjs.evtTools.common.toString(((gdjs.car_95driving_95gameCode.GDcarObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.car_95driving_95gameCode.GDcarObjects1[0].getVariables()).getFromIndex(0).getAsNumber()));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("road"), gdjs.car_95driving_95gameCode.GDroadObjects1);
{for(var i = 0, len = gdjs.car_95driving_95gameCode.GDroadObjects1.length ;i < len;++i) {
    gdjs.car_95driving_95gameCode.GDroadObjects1[i].getBehavior("Object3D").setRotationX(gdjs.car_95driving_95gameCode.GDroadObjects1[i].getBehavior("Object3D").getRotationX() - (1));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Tree_Explode"), gdjs.car_95driving_95gameCode.GDTree_9595ExplodeObjects1);
gdjs.copyArray(runtimeScene.getObjects("puddle"), gdjs.car_95driving_95gameCode.GDpuddleObjects1);
gdjs.copyArray(runtimeScene.getObjects("puddle_splash"), gdjs.car_95driving_95gameCode.GDpuddle_9595splashObjects1);
gdjs.copyArray(runtimeScene.getObjects("tree"), gdjs.car_95driving_95gameCode.GDtreeObjects1);
{for(var i = 0, len = gdjs.car_95driving_95gameCode.GDpuddleObjects1.length ;i < len;++i) {
    gdjs.car_95driving_95gameCode.GDpuddleObjects1[i].setY(gdjs.car_95driving_95gameCode.GDpuddleObjects1[i].getY() + (15));
}
}
{for(var i = 0, len = gdjs.car_95driving_95gameCode.GDtreeObjects1.length ;i < len;++i) {
    gdjs.car_95driving_95gameCode.GDtreeObjects1[i].setY(gdjs.car_95driving_95gameCode.GDtreeObjects1[i].getY() + (15));
}
}
{for(var i = 0, len = gdjs.car_95driving_95gameCode.GDTree_9595ExplodeObjects1.length ;i < len;++i) {
    gdjs.car_95driving_95gameCode.GDTree_9595ExplodeObjects1[i].setY(gdjs.car_95driving_95gameCode.GDTree_9595ExplodeObjects1[i].getY() + (15));
}
}
{for(var i = 0, len = gdjs.car_95driving_95gameCode.GDpuddle_9595splashObjects1.length ;i < len;++i) {
    gdjs.car_95driving_95gameCode.GDpuddle_9595splashObjects1[i].setY(gdjs.car_95driving_95gameCode.GDpuddle_9595splashObjects1[i].getY() + (15));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "shake") > 0.25;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "shake");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "distance") >= 60;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "spawn_tree") > gdjs.randomFloatInRange(0.1, 3);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "spawn_tree");
}

{ //Subevents
gdjs.car_95driving_95gameCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "spawn_puddle") > gdjs.randomFloatInRange(0.5, 3);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "spawn_puddle");
}

{ //Subevents
gdjs.car_95driving_95gameCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("tree"), gdjs.car_95driving_95gameCode.GDtreeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.car_95driving_95gameCode.GDtreeObjects1.length;i<l;++i) {
    if ( gdjs.car_95driving_95gameCode.GDtreeObjects1[i].getCenterYInScene() > 1500 ) {
        isConditionTrue_0 = true;
        gdjs.car_95driving_95gameCode.GDtreeObjects1[k] = gdjs.car_95driving_95gameCode.GDtreeObjects1[i];
        ++k;
    }
}
gdjs.car_95driving_95gameCode.GDtreeObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.car_95driving_95gameCode.GDtreeObjects1 */
{for(var i = 0, len = gdjs.car_95driving_95gameCode.GDtreeObjects1.length ;i < len;++i) {
    gdjs.car_95driving_95gameCode.GDtreeObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("puddle"), gdjs.car_95driving_95gameCode.GDpuddleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.car_95driving_95gameCode.GDpuddleObjects1.length;i<l;++i) {
    if ( gdjs.car_95driving_95gameCode.GDpuddleObjects1[i].getCenterYInScene() > 1500 ) {
        isConditionTrue_0 = true;
        gdjs.car_95driving_95gameCode.GDpuddleObjects1[k] = gdjs.car_95driving_95gameCode.GDpuddleObjects1[i];
        ++k;
    }
}
gdjs.car_95driving_95gameCode.GDpuddleObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.car_95driving_95gameCode.GDpuddleObjects1 */
{for(var i = 0, len = gdjs.car_95driving_95gameCode.GDpuddleObjects1.length ;i < len;++i) {
    gdjs.car_95driving_95gameCode.GDpuddleObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("car"), gdjs.car_95driving_95gameCode.GDcarObjects1);
gdjs.copyArray(runtimeScene.getObjects("tree"), gdjs.car_95driving_95gameCode.GDtreeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics3d.haveObjectsStartedColliding(gdjs.car_95driving_95gameCode.mapOfGDgdjs_9546car_959595driving_959595gameCode_9546GDcarObjects1Objects, "Physics3D", gdjs.car_95driving_95gameCode.mapOfGDgdjs_9546car_959595driving_959595gameCode_9546GDtreeObjects1Objects, "Physics3D", false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23341908);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.car_95driving_95gameCode.GDcarObjects1 */
/* Reuse gdjs.car_95driving_95gameCode.GDtreeObjects1 */
gdjs.car_95driving_95gameCode.GDTree_9595ExplodeObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.car_95driving_95gameCode.mapOfGDgdjs_9546car_959595driving_959595gameCode_9546GDTree_95959595ExplodeObjects1Objects, (( gdjs.car_95driving_95gameCode.GDtreeObjects1.length === 0 ) ? 0 :gdjs.car_95driving_95gameCode.GDtreeObjects1[0].getAABBCenterX()), (( gdjs.car_95driving_95gameCode.GDtreeObjects1.length === 0 ) ? 0 :gdjs.car_95driving_95gameCode.GDtreeObjects1[0].getAABBCenterY()), "Car");
}
{for(var i = 0, len = gdjs.car_95driving_95gameCode.GDTree_9595ExplodeObjects1.length ;i < len;++i) {
    gdjs.car_95driving_95gameCode.GDTree_9595ExplodeObjects1[i].getBehavior("Object3D").setZ(50);
}
}
{for(var i = 0, len = gdjs.car_95driving_95gameCode.GDtreeObjects1.length ;i < len;++i) {
    gdjs.car_95driving_95gameCode.GDtreeObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}
{for(var i = 0, len = gdjs.car_95driving_95gameCode.GDcarObjects1.length ;i < len;++i) {
    gdjs.car_95driving_95gameCode.GDcarObjects1[i].returnVariable(gdjs.car_95driving_95gameCode.GDcarObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "shake");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("car"), gdjs.car_95driving_95gameCode.GDcarObjects1);
gdjs.copyArray(runtimeScene.getObjects("puddle"), gdjs.car_95driving_95gameCode.GDpuddleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.car_95driving_95gameCode.mapOfGDgdjs_9546car_959595driving_959595gameCode_9546GDcarObjects1Objects, gdjs.car_95driving_95gameCode.mapOfGDgdjs_9546car_959595driving_959595gameCode_9546GDpuddleObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23343524);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.car_95driving_95gameCode.GDcarObjects1 */
/* Reuse gdjs.car_95driving_95gameCode.GDpuddleObjects1 */
gdjs.car_95driving_95gameCode.GDpuddle_9595splashObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.car_95driving_95gameCode.mapOfGDgdjs_9546car_959595driving_959595gameCode_9546GDpuddle_95959595splashObjects1Objects, (( gdjs.car_95driving_95gameCode.GDpuddleObjects1.length === 0 ) ? 0 :gdjs.car_95driving_95gameCode.GDpuddleObjects1[0].getAABBCenterX()), (( gdjs.car_95driving_95gameCode.GDpuddleObjects1.length === 0 ) ? 0 :gdjs.car_95driving_95gameCode.GDpuddleObjects1[0].getAABBCenterY()), "Car");
}
{for(var i = 0, len = gdjs.car_95driving_95gameCode.GDpuddle_9595splashObjects1.length ;i < len;++i) {
    gdjs.car_95driving_95gameCode.GDpuddle_9595splashObjects1[i].getBehavior("Object3D").setZ(10);
}
}
{for(var i = 0, len = gdjs.car_95driving_95gameCode.GDpuddleObjects1.length ;i < len;++i) {
    gdjs.car_95driving_95gameCode.GDpuddleObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}
{for(var i = 0, len = gdjs.car_95driving_95gameCode.GDcarObjects1.length ;i < len;++i) {
    gdjs.car_95driving_95gameCode.GDcarObjects1[i].returnVariable(gdjs.car_95driving_95gameCode.GDcarObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "shake");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("car"), gdjs.car_95driving_95gameCode.GDcarObjects1);
{for(var i = 0, len = gdjs.car_95driving_95gameCode.GDcarObjects1.length ;i < len;++i) {
    gdjs.car_95driving_95gameCode.GDcarObjects1[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.25, 25, 25, 15, 10, 0.05, false, null);
}
}
}

}


{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("car"), gdjs.car_95driving_95gameCode.GDcarObjects1);
{for(var i = 0, len = gdjs.car_95driving_95gameCode.GDcarObjects1.length ;i < len;++i) {
    gdjs.car_95driving_95gameCode.GDcarObjects1[i].getBehavior("Tween").addObjectPositionXTween2("car", gdjs.evtTools.common.clamp(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), 280, 1000), "linear", 0.25, false);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("car"), gdjs.car_95driving_95gameCode.GDcarObjects1);
{for(var i = 0, len = gdjs.car_95driving_95gameCode.GDcarObjects1.length ;i < len;++i) {
    gdjs.car_95driving_95gameCode.GDcarObjects1[i].getBehavior("Tween").addObjectPositionXTween2("car", (gdjs.car_95driving_95gameCode.GDcarObjects1[i].getX()), "linear", 0.25, false);
}
}
elseEventsChainSatisfied = true;
}
}

}


{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("car"), gdjs.car_95driving_95gameCode.GDcarObjects1);
{for(var i = 0, len = gdjs.car_95driving_95gameCode.GDcarObjects1.length ;i < len;++i) {
    gdjs.car_95driving_95gameCode.GDcarObjects1[i].getBehavior("Tween").addObjectAngleTween2("angle", gdjs.evtTools.common.angleBetweenPositions((gdjs.car_95driving_95gameCode.GDcarObjects1[i].getX()), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), -((gdjs.car_95driving_95gameCode.GDcarObjects1[i].getAABBTop()))), "linear", 0.01, false);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("car"), gdjs.car_95driving_95gameCode.GDcarObjects1);
{for(var i = 0, len = gdjs.car_95driving_95gameCode.GDcarObjects1.length ;i < len;++i) {
    gdjs.car_95driving_95gameCode.GDcarObjects1[i].getBehavior("Tween").addObjectAngleTween2("angle_1", -(90), "bounce", 0.1, false);
}
}
elseEventsChainSatisfied = true;
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("car"), gdjs.car_95driving_95gameCode.GDcarObjects1);
gdjs.copyArray(runtimeScene.getObjects("smoke"), gdjs.car_95driving_95gameCode.GDsmokeObjects1);
{for(var i = 0, len = gdjs.car_95driving_95gameCode.GDsmokeObjects1.length ;i < len;++i) {
    gdjs.car_95driving_95gameCode.GDsmokeObjects1[i].SetFlow(((gdjs.car_95driving_95gameCode.GDcarObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.car_95driving_95gameCode.GDcarObjects1[0].getVariables()).getFromIndex(0).getAsNumber(), null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SmallGreenButton"), gdjs.car_95driving_95gameCode.GDSmallGreenButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.car_95driving_95gameCode.GDSmallGreenButtonObjects1.length;i<l;++i) {
    if ( gdjs.car_95driving_95gameCode.GDSmallGreenButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.car_95driving_95gameCode.GDSmallGreenButtonObjects1[k] = gdjs.car_95driving_95gameCode.GDSmallGreenButtonObjects1[i];
        ++k;
    }
}
gdjs.car_95driving_95gameCode.GDSmallGreenButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Quest_Text"), gdjs.car_95driving_95gameCode.GDQuest_9595TextObjects1);
/* Reuse gdjs.car_95driving_95gameCode.GDSmallGreenButtonObjects1 */
{for(var i = 0, len = gdjs.car_95driving_95gameCode.GDQuest_9595TextObjects1.length ;i < len;++i) {
    gdjs.car_95driving_95gameCode.GDQuest_9595TextObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.car_95driving_95gameCode.GDSmallGreenButtonObjects1.length ;i < len;++i) {
    gdjs.car_95driving_95gameCode.GDSmallGreenButtonObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(12).setBoolean(false);
}
}

}

}

};

gdjs.car_95driving_95gameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.car_95driving_95gameCode.GDcarObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDcarObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDroadObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDroadObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDcameraObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDcameraObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDlookatObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDlookatObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDtreeObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDtreeObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDTree_9595ExplodeObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDTree_9595ExplodeObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDpuddleObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDpuddleObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDpuddle_9595splashObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDpuddle_9595splashObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDdistanceObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDdistanceObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDsmokeObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDsmokeObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDdamageObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDdamageObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDPaper_9595Bark_9595VideoObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDPaper_9595Bark_9595VideoObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDGerms_9595VideoObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDGerms_9595VideoObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDRiver_9595StoryObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDRiver_9595StoryObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDWhere_9595do_9595germs_9595live_9595and_9595breedObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDWhere_9595do_9595germs_9595live_9595and_9595breedObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDcar_9595game_9595introObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDcar_9595game_9595introObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDQuest_9595TextObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDQuest_9595TextObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDSmallGreenButtonObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDSmallGreenButtonObjects2.length = 0;

gdjs.car_95driving_95gameCode.eventsList4(runtimeScene);
gdjs.car_95driving_95gameCode.GDcarObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDcarObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDroadObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDroadObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDcameraObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDcameraObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDlookatObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDlookatObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDtreeObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDtreeObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDTree_9595ExplodeObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDTree_9595ExplodeObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDpuddleObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDpuddleObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDpuddle_9595splashObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDpuddle_9595splashObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDdistanceObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDdistanceObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDsmokeObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDsmokeObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDdamageObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDdamageObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDPaper_9595Bark_9595VideoObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDPaper_9595Bark_9595VideoObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDGerms_9595VideoObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDGerms_9595VideoObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDRiver_9595StoryObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDRiver_9595StoryObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDWhere_9595do_9595germs_9595live_9595and_9595breedObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDWhere_9595do_9595germs_9595live_9595and_9595breedObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDcar_9595game_9595introObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDcar_9595game_9595introObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDQuest_9595TextObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDQuest_9595TextObjects2.length = 0;
gdjs.car_95driving_95gameCode.GDSmallGreenButtonObjects1.length = 0;
gdjs.car_95driving_95gameCode.GDSmallGreenButtonObjects2.length = 0;


return;

}

gdjs['car_95driving_95gameCode'] = gdjs.car_95driving_95gameCode;
