import IconPlaceItemFill0Wght100Grad0Opsz48 from '../components/PlaceItemFill0Wght100Grad0Opsz48'
import IconPlaceItemFill0Wght200Grad0Opsz48 from '../components/PlaceItemFill0Wght200Grad0Opsz48'
import IconPlaceItemFill0Wght300Grad0Opsz48 from '../components/PlaceItemFill0Wght300Grad0Opsz48'
import IconPlaceItemFill0Wght400Grad0Opsz48 from '../components/PlaceItemFill0Wght400Grad0Opsz48'
import IconPlaceItemFill0Wght500Grad0Opsz48 from '../components/PlaceItemFill0Wght500Grad0Opsz48'
import IconPlaceItemFill0Wght600Grad0Opsz48 from '../components/PlaceItemFill0Wght600Grad0Opsz48'
import IconPlaceItemFill0Wght700Grad0Opsz48 from '../components/PlaceItemFill0Wght700Grad0Opsz48'
import IconPlaceItemFill1Wght100Grad0Opsz48 from '../components/PlaceItemFill1Wght100Grad0Opsz48'
import IconPlaceItemFill1Wght200Grad0Opsz48 from '../components/PlaceItemFill1Wght200Grad0Opsz48'
import IconPlaceItemFill1Wght300Grad0Opsz48 from '../components/PlaceItemFill1Wght300Grad0Opsz48'
import IconPlaceItemFill1Wght400Grad0Opsz48 from '../components/PlaceItemFill1Wght400Grad0Opsz48'
import IconPlaceItemFill1Wght500Grad0Opsz48 from '../components/PlaceItemFill1Wght500Grad0Opsz48'
import IconPlaceItemFill1Wght600Grad0Opsz48 from '../components/PlaceItemFill1Wght600Grad0Opsz48'
import IconPlaceItemFill1Wght700Grad0Opsz48 from '../components/PlaceItemFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPlaceItem = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPlaceItemFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPlaceItemFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPlaceItemFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPlaceItemFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPlaceItemFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPlaceItemFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPlaceItemFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPlaceItemFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPlaceItemFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPlaceItemFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPlaceItemFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPlaceItemFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPlaceItemFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPlaceItemFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
