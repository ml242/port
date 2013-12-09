<pre>&lt;script src=&quot;//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;jquery.backstretch.min.js&quot;&gt;&lt;/script&gt;
&lt;script&gt;
    $.backstretch(&quot;pot-holder.jpg&quot;);
&lt;/script&gt;</pre>
        <h2>Other Elements</h2>
        <p>Or, if you'd like, you can also attach Backstretch to another block level element on the page.</p>
        <div class="other">
          <div><p>The background image on this element was set using Backstretch.</p></div>
        </div>
        <pre>&lt;script src=&quot;//ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;jquery.backstretch.min.js&quot;&gt;&lt;/script&gt;
&lt;script&gt;
    $(&quot;.other&quot;).backstretch(&quot;coffee.jpg&quot;);
&lt;/script&gt;</pre>
    </div>
  <script src="../libs/jquery/jquery.js"></script>
  <script src="../src/jquery.backstretch.js"></script>
  <script>
      $.backstretch(["pot-holder.jpg"]);
      $(".other").backstretch("coffee.jpg");
  </script>