<script>
    export let task
    export let checked
</script>

{ #if task }
{ #if checked }
<li style="list-style-type: none;"><input type="checkbox" style="pointer-events: none;" checked><slot></slot></li>
{ :else }
<li style="list-style-type: none;"><input type="checkbox" style="pointer-events: none;"><slot></slot></li>
{ /if }
{ :else }
<li><slot></slot></li>
{ /if }