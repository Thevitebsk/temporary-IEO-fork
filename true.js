function TRUE(program,input){
  var stack=[];var output='';var temp=[];
  for(var p=0;p<program.length;p++){
    if (program[p]=='"'){
      while(program[p+1]!='"'){p++;output+=program[p]};
      };
  };
  return output};
