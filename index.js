/*!
 * dedup <https://github.com/flugv1/dedup>
 *
 * Copyright (c) 2019, Marc Lemay.
 * Released under the MIT License.
 */

const dedup = (array) => {
    return Array.from(new Set(array));
}

module.exports = dedup; 
