function submitTryit() {
  var text = document.getElementById("textareaCode").value;
  var ifr = document.createElement("iframe");
  ifr.setAttribute("frameborder", "0");
  ifr.setAttribute("id", "iframeResult");  
  document.getElementById("iframewrapper").innerHTML = "";
  document.getElementById("iframewrapper").appendChild(ifr);
  var ifrw = (ifr.contentWindow) ? ifr.contentWindow : (ifr.contentDocument.document) ? ifr.contentDocument.document : ifr.contentDocument;
  ifrw.document.open();
  ifrw.document.write(text);  
  ifrw.document.close();
  //23.02.2016: contentEditable is set to true, to fix text-selection (bug) in firefox.
  //(and back to false to prevent the content from being editable)
  //(To reproduce the error: Select text in the result window with, and without, the contentEditable statements below.)  
  if (ifrw.document.body && !ifrw.document.body.isContentEditable) {
    ifrw.document.body.contentEditable = true;
    ifrw.document.body.contentEditable = false;
  }
}