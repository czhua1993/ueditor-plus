/*! UEditorPlus v2.0.0*/
function addUploadButtonListener(){g("saveFile").addEventListener("change",function(){if(1!==this.files.length)return void alert("请选择1个文件");$(".image-tip").html("正在转存，请稍后...");var a=this.files[0];uploader.addFile(a),uploader.upload()})}function addOkListener(){dialog.onok=function(){if(imageUrls.length){var a=editor.getOpt("imageUrlPrefix"),b=domUtils.getElementsByTagName(editor.document,"img");editor.fireEvent("saveScene");for(var c,d=0;c=b[d++];){var e=c.getAttribute("word_img");if(e)for(var f,g=0;f=imageUrls[g++];)if(e.indexOf(f.name.replace(" ",""))!=-1){c.src=a+f.url,c.setAttribute("_src",a+f.url),c.setAttribute("title",f.title),domUtils.removeAttributes(c,["word_img","style","width","height"]),editor.fireEvent("selectionchange");break}}editor.fireEvent("saveScene")}},dialog.oncancel=function(){}}function showLocalPath(a){var b=editor.selection.getRange().getClosedNode(),c=editor.execCommand("wordimage");if(1==c.length||b&&"IMG"==b.tagName)return void(g(a).value=c[0]);var d=c[0],e=d.lastIndexOf("/")||0,f=d.lastIndexOf("\\")||0,h=e>f?"/":"\\";d=d.substring(0,d.lastIndexOf(h)+1),g(a).value=d}function createCopyButton(a,b){var c=g(b).value;c.startsWith("file:////")&&(c=c.substring(8)),g(a).setAttribute("data-clipboard-text",c);var d=new Clipboard("[data-clipboard-text]");d.on("success",function(a){g("copyButton").innerHTML="复制成功"})}var wordImage={},g=$G,flashObj,flashContainer;wordImage.init=function(a,b){showLocalPath("fileUrl"),createCopyButton("copyButton","fileUrl"),addUploadButtonListener(),addOkListener()};