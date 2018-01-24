import React from 'react';
import renderer from 'react-test-renderer';
import AssetImage from '../src/js/Components/AssetImage';

test('Image Asset Renders Correctly', () => {
    const component = renderer.create(
        <AssetImage 
            title="Test Title"
            description="Test Description"
            filePath="http://placehold.it/400x300"
        />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Audio Asset Renders Correctly', () => {
    const component = renderer.create(
        <AssetImage 
            title="Test Title"
            description="Test Description"
            filePath="http://images-assets.nasa.gov/audio/Ep7_Total%20Eclipse%20over%20America/Ep7_Total%20Eclipse%20over%20America~orig.mp3"
        />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});