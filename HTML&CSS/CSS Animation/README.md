# CSS tutorial series: CSS Animation

###### tutorial

You might've already come across animation on a website you previously visited and probably wondered how was it done.

Some animation require the use of javascript which we will get to in a later post but first let's discuss how to animate in CSS.

What is animation?
An animation is the gradual transition of an element's style to another using properties that sets the looks that the element will have at particular times.

How is animation done ?
In order for an animation to work it must first be connected to an element.

<table>
<thead>
<tr>
<th>Property</th>
<th>function</th>
<th>value</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>animation-delay</code></td>
<td>defines the delay of the start time of the animation.</td>
<td>takes a value in seconds such as <code>2s</code>
</td>
</tr>
<tr>
<td><code>animation-direction</code></td>
<td>defines if an animation is to be played forward or backward or even in cycles</td>
<td>
<code>normal</code>, <code>reverse</code>,<code>alternate</code>, <code>alternate-reverse</code>
</td>
</tr>
<tr>
<td><code>animation-duration</code></td>
<td>indicates how long should the animation last</td>
<td>takes a value in seconds such as <code>5s</code>
</td>
</tr>
<tr>
<td><code>animation-fill-mode</code></td>
<td>indicates how the element looks before and after it is applied</td>
<td>
<code>none</code>, <code>forwards</code>, <code>backwards</code>, <code>both</code>
</td>
</tr>
<tr>
<td><code>animation-iteration-count</code></td>
<td>indicates how many times the animation should be played</td>
<td>takes either a number or the value <code>infinite</code>
</td>
</tr>
<tr>
<td><code>animation-name</code></td>
<td>defines a name that is used to select the <code>@keyframes</code> rule that specifies the animation</td>
<td>
<code>none</code> or <code>custom-name</code>
</td>
</tr>
<tr>
<td><code>animation-play-state</code></td>
<td>indicates whether to play or pause the animation</td>
<td>
<code>paused</code>, <code>running</code>
</td>
</tr>
<tr>
<td><code>animation-timing-function</code></td>
<td>determines how an animation develops over the course of each cycle</td>
<td>
<code>ease</code>, <code>ease-in</code>, <code>ease-out</code>, <code>ease-in-out</code>, <code>linear</code>
</td>
</tr>
</tbody>
</table>

###### animation-fill-mode:

forwards will allow the element to keep the style values that were set by the last keyframe.

backwards will allow the element to get the styles set by the first keyframe and keep it during the delay period.

both The animation will follow rules for both forward and backward motion.

###### animation-timing-function:

linear allows the animation to retain the same speed from start to end.

ease allows the animation to start slow then speed up before ending slowly.

ease-in allows the animation to start slowly

ease-in-out allows the animation to have a slow start and end.

ease-out allows the animation to have a slow end.

Syntax
div {
  property: value;
  property: value;
  animation-name: example;
  animation-duration: 2s;
}

@keyframes example {
 from { property: value}
 to { property: value}
}
