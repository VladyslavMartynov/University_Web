<?xml version="1.0"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html xmlns="http://www.w3.org/1999/xhtml">

  <style>
    .article:nth(1){
    text-align:center;
    font-size:30px;
      
    }
    .champion{
    background:#328BF0;
    color:blue;
    font-size:50px;
    width:100%;
    height:100px;
    }
    .date{
    background:#C71585;
    }
    *{
    margin: 0;
    padding: 0;
     }
     .text_f{
     font-size:40px;
     background:#00008B;
     color:yellow;
     
     font-weight:bold;
     font-style:italic;
     }
    h2{
      text-align: center;
    }
    
   
    .comments{
      margin-top:0px;
      background:#808080;
    }
    .theme, .date{
      font-size:20px;
      font-weight:bold;
      text-align:left;
       background:#286DBD;
       
    }
    .reply{
      margin: 0 0 0 50px;
    }
  </style>



  <body>
    <div class="blog">
      <xsl:for-each select="blog/article">
        <div class="article">
         <div  class="champion"> <h2><xsl:value-of select="title"/></h2></div>
          <p class="date"><xsl:value-of select="date"/></p>
          <p class="theme"><xsl:value-of select="theme"/></p>
          <div class="text_f"><p><xsl:value-of select="text"/></p></div>

          <div class="comments">
            <xsl:for-each select="comments/comment">
              <h4><xsl:value-of select="author"/></h4>
              <div class="text_s"><p><xsl:value-of select="text"/></p></div>

              <div class="reply">
                <xsl:for-each select="replies/reply">
                  <h4><xsl:value-of select="author"/></h4>
                  <p><xsl:value-of select="text"/></p>
                </xsl:for-each>
              </div>
            </xsl:for-each>
          </div>
        </div>
      </xsl:for-each>
    </div>
  </body>

  </html>
</xsl:template>

</xsl:stylesheet>