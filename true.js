function TRUE(program,input){
  var stack=[];var output='';var temp=[];
  for(var p=0;p<program.length;p++){
    if (program[p]=='"'){p++
      while(program[p+1]!='"'){output+=program[p];p++}
      };
  };
  return output
  };
