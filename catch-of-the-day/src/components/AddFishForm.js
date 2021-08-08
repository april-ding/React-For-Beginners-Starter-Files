import React from 'react';

class AddFishForm extends React.Component {
    // create refs
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    // handler
    createFish = (e) => {
        e.preventDefault();
        // 1. turn all of the inputs into a fish object, and add it to the inventory of fish
        const fish = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value,
        };
        // 2. add the new fish to the inventory
        this.props.addFish(fish);
        // 3. refresh the form after submitting
        e.currentTarget.reset();
    };

    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" type="text" placeholder="Name"  ref={this.nameRef}/>
                <input name="price" type="text" placeholder="Price"  ref={this.priceRef}/>
                <select name="status" ref={this.statusRef}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" placeholder="Desc"  ref={this.descRef}/>
                <input name="image" type="text" placeholder="Image" ref={this.imageRef} />
                <button type="submit">Add Fish</button>
            </form>
        );
    }
}

export default AddFishForm;