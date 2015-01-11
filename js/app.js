(function(){
	var app=angular.module('game',[]);


	app.controller('formCtrl',function($scope){
  	$scope.isVisible=false;
 
		$scope.x=-1;
		$scope.translations=[];
		$scope.words=["Radio","Train","Welcome!","table"];
        $scope.image=["images/radio.png","images/train.jpg","images/welcome!.jpg","images/table.jpg"];


           $scope.submit=function(){
              

           	if(	$scope.x<$scope.words.length){
           	$scope.x++;
            if($scope.input)
         
            $scope.translations.push($scope.input); 
            $scope.input="";
          

 


         }
          

         
      }
      
       $scope.onItemClicked=function(item){
        
       	$scope.isVisible=true;
       }
          







	});
       
app.controller('tableCtrl',function($scope){
  
  
});










})();
