/*
 * @link https://www.humhub.org/
 * @copyright Copyright (c) 2017 HumHub GmbH & Co. KG
 * @license https://www.humhub.com/licences
 *
 */
import {placeholderPlugin} from './plugin'

const placeholder = {
    id: 'placeholder',
    plugins: (options) => {
        if(!options.placeholder || !options.placeholder.text) {
            return [];
        }

        return [
            placeholderPlugin(options)
        ]
    },
};

export default placeholder;
