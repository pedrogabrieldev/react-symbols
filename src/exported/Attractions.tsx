import IconAttractionsFill0Wght100Grad0Opsz48 from '../components/AttractionsFill0Wght100Grad0Opsz48'
import IconAttractionsFill0Wght200Grad0Opsz48 from '../components/AttractionsFill0Wght200Grad0Opsz48'
import IconAttractionsFill0Wght300Grad0Opsz48 from '../components/AttractionsFill0Wght300Grad0Opsz48'
import IconAttractionsFill0Wght400Grad0Opsz48 from '../components/AttractionsFill0Wght400Grad0Opsz48'
import IconAttractionsFill0Wght500Grad0Opsz48 from '../components/AttractionsFill0Wght500Grad0Opsz48'
import IconAttractionsFill0Wght600Grad0Opsz48 from '../components/AttractionsFill0Wght600Grad0Opsz48'
import IconAttractionsFill0Wght700Grad0Opsz48 from '../components/AttractionsFill0Wght700Grad0Opsz48'
import IconAttractionsFill1Wght100Grad0Opsz48 from '../components/AttractionsFill1Wght100Grad0Opsz48'
import IconAttractionsFill1Wght200Grad0Opsz48 from '../components/AttractionsFill1Wght200Grad0Opsz48'
import IconAttractionsFill1Wght300Grad0Opsz48 from '../components/AttractionsFill1Wght300Grad0Opsz48'
import IconAttractionsFill1Wght400Grad0Opsz48 from '../components/AttractionsFill1Wght400Grad0Opsz48'
import IconAttractionsFill1Wght500Grad0Opsz48 from '../components/AttractionsFill1Wght500Grad0Opsz48'
import IconAttractionsFill1Wght600Grad0Opsz48 from '../components/AttractionsFill1Wght600Grad0Opsz48'
import IconAttractionsFill1Wght700Grad0Opsz48 from '../components/AttractionsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAttractions = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAttractionsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAttractionsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAttractionsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAttractionsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAttractionsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAttractionsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAttractionsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAttractionsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAttractionsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAttractionsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAttractionsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAttractionsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAttractionsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAttractionsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
