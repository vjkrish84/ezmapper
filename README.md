<h3 class="code-line" data-line-start=0 data-line-end=1 ><a id="Description_0"></a>Description</h3>
<hr>
<p class="has-line-data" data-line-start="5" data-line-end="6">This package helps in converting the incoming json to target json format. The use of this package is as follows:</p>
<p class="has-line-data" data-line-start="7" data-line-end="8">var output = ezmapper(input,data);</p>
<ul>
<li class="has-line-data" data-line-start="9" data-line-end="10">input - This is the mapping details to be provided for conversion. Pipe symbol can be used if you want to map same object to 2 different o/p json attributes</li>
<li class="has-line-data" data-line-start="10" data-line-end="12">data - This is the incoming data</li>
</ul>
<h3 class="code-line" data-line-start=12 data-line-end=13 ><a id="Input_Formats_12"></a>Input Formats</h3>
<hr>
<p class="has-line-data" data-line-start="16" data-line-end="17">This is the output format:</p>
<pre><code> input:{
     &quot;Person.firstName&quot;:
      &quot;Info.Details.Name.FirstName&quot;,
    &quot;Person.lastName&quot;:
      &quot;Info.Details.Name.LastName&quot;,
    &quot;Person.address.addressLine&quot;:
      &quot;Info.Details.Type.addressLine&quot;,
    &quot;Person.address.addressLine2&quot;:
      &quot;Info.Details.Type.addressLine2|AddressInfo.addressLine2&quot;,
 }
</code></pre>
<p class="has-line-data" data-line-start="29" data-line-end="30">This is the data that needs to be converted as mentioned in the output format</p>
<pre><code>data = {
  Person: {
    firstName: &quot;Sam&quot;,
    lastName: &quot;Edwards&quot;,
    address: [
      {
        addressLine: &quot;223&quot;,
        addressLine2: &quot;john street&quot;,
      },
      {
        addressLine: &quot;224&quot;,
        addressLine2: &quot;john maxwell street&quot;,
      },
    ],
  },
};
</code></pre>
<p class="has-line-data" data-line-start="49" data-line-end="50">This the actual formatted output generated:</p>
<pre><code>output:
{
    &quot;Info&quot;: {
        &quot;Details&quot;: {
            &quot;FirstName&quot;: &quot;Sam&quot;,
            &quot;LastName&quot;: &quot;Edwards&quot;,
            &quot;Type&quot;: [
                {
                    &quot;addressLine&quot;: &quot;223&quot;,
                    &quot;addressLine2&quot;: &quot;john street&quot;
                },
                {
                    &quot;addressLine&quot;: &quot;224&quot;,
                    &quot;addressLine2&quot;: &quot;john maxwell street&quot;
                }
            ]
        }
    },
    &quot;AddressInfo&quot;: [
        {
            &quot;addressLine2&quot;: &quot;john street&quot;
        },
        {
            &quot;addressLine2&quot;: &quot;john maxwell street&quot;
        }
    ]
}</code></pre>