export interface InputOverlaySetting {
    /**
     * Where the vertical positioning of the overlay/watermark should begin from.
     * 
     * Possible Values:
     * * `top`
     * * `middle`
     * * `bottom`
     * 
     * Default: `top`
     */
    vertical_align?: 'top' | 'middle' | 'bottom';

    /**
     * The distance from the `vertical_align` starting point and the image's closest edge.
     * Can be expressed as a percent (`"10%"`) or as a pixel value (`"100px"`).
     * Negative values will move the overlay offscreen.
     * In the case of 'middle', a positive value will shift the overlay towards the bottom and and a negative value will shift it towards the top.
     * 
     * Default: `0%`
     */
    vertical_margin?: string;

    /**
     * Where the horizontal positioning of the overlay/watermark should begin from.
     * 
     * Possible Values:
     * * `left`
     * * `center`
     * * `right`
     * 
     * Default: `left`
     */
    horizontal_align?: 'left' | 'center' | 'right';

    /**
     * The distance from the `horizontal_align` starting point and the image's closest edge.
     * Can be expressed as a percent (`"10%"`) or as a pixel value (`"100px"`).
     * Negative values will move the overlay offscreen.
     * In the case of 'center', a positive value will shift the image towards the right and and a negative value will shift it towards the left.
     * 
     * Default: `0%`
     */
    horizontal_margin?: string;

    /**
     * How wide the overlay should appear.
     * Can be expressed as a percent (`"10%"`) or as a pixel value (`"100px"`).
     * If both width and height are left blank the width will be the true pixels of the image, applied as if the video has been scaled to fit a 1920x1080 frame.
     * If height is supplied with no width, the width will scale proportionally to the height.
     */
    width?: string;

    /**
     * How tall the overlay should appear.
     * Can be expressed as a percent ("10%") or as a pixel value ("100px").
     * If both width and height are left blank the height will be the true pixels of the image, applied as if the video has been scaled to fit a 1920x1080 frame.
     * If width is supplied with no height, the height will scale proportionally to the width.
     */
    height?: string;

    /**
     * How opaque the overlay should appear, expressed as a percent.
     * 
     * Default: `100%`
     */
    opacity?: string;
}