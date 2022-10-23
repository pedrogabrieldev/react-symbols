import IconDataArrayFill0Wght100Grad0Opsz48 from '../components/DataArrayFill0Wght100Grad0Opsz48'
import IconDataArrayFill0Wght200Grad0Opsz48 from '../components/DataArrayFill0Wght200Grad0Opsz48'
import IconDataArrayFill0Wght300Grad0Opsz48 from '../components/DataArrayFill0Wght300Grad0Opsz48'
import IconDataArrayFill0Wght400Grad0Opsz48 from '../components/DataArrayFill0Wght400Grad0Opsz48'
import IconDataArrayFill0Wght500Grad0Opsz48 from '../components/DataArrayFill0Wght500Grad0Opsz48'
import IconDataArrayFill0Wght600Grad0Opsz48 from '../components/DataArrayFill0Wght600Grad0Opsz48'
import IconDataArrayFill0Wght700Grad0Opsz48 from '../components/DataArrayFill0Wght700Grad0Opsz48'
import IconDataArrayFill1Wght100Grad0Opsz48 from '../components/DataArrayFill1Wght100Grad0Opsz48'
import IconDataArrayFill1Wght200Grad0Opsz48 from '../components/DataArrayFill1Wght200Grad0Opsz48'
import IconDataArrayFill1Wght300Grad0Opsz48 from '../components/DataArrayFill1Wght300Grad0Opsz48'
import IconDataArrayFill1Wght400Grad0Opsz48 from '../components/DataArrayFill1Wght400Grad0Opsz48'
import IconDataArrayFill1Wght500Grad0Opsz48 from '../components/DataArrayFill1Wght500Grad0Opsz48'
import IconDataArrayFill1Wght600Grad0Opsz48 from '../components/DataArrayFill1Wght600Grad0Opsz48'
import IconDataArrayFill1Wght700Grad0Opsz48 from '../components/DataArrayFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDataArray = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDataArrayFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDataArrayFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDataArrayFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDataArrayFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDataArrayFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDataArrayFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDataArrayFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDataArrayFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDataArrayFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDataArrayFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDataArrayFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDataArrayFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDataArrayFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDataArrayFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
