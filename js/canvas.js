function canvas() {

    self = {};

    self.getContext =  function() {
        let canvas = document.getElementById('game');
        return { ctx: canvas.getContext('2d'), canvas: canvas};
    }
    

    return self;
}
export default canvas();