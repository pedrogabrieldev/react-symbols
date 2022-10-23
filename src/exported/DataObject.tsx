import IconDataObjectFill0Wght100Grad0Opsz48 from '../components/DataObjectFill0Wght100Grad0Opsz48'
import IconDataObjectFill0Wght200Grad0Opsz48 from '../components/DataObjectFill0Wght200Grad0Opsz48'
import IconDataObjectFill0Wght300Grad0Opsz48 from '../components/DataObjectFill0Wght300Grad0Opsz48'
import IconDataObjectFill0Wght400Grad0Opsz48 from '../components/DataObjectFill0Wght400Grad0Opsz48'
import IconDataObjectFill0Wght500Grad0Opsz48 from '../components/DataObjectFill0Wght500Grad0Opsz48'
import IconDataObjectFill0Wght600Grad0Opsz48 from '../components/DataObjectFill0Wght600Grad0Opsz48'
import IconDataObjectFill0Wght700Grad0Opsz48 from '../components/DataObjectFill0Wght700Grad0Opsz48'
import IconDataObjectFill1Wght100Grad0Opsz48 from '../components/DataObjectFill1Wght100Grad0Opsz48'
import IconDataObjectFill1Wght200Grad0Opsz48 from '../components/DataObjectFill1Wght200Grad0Opsz48'
import IconDataObjectFill1Wght300Grad0Opsz48 from '../components/DataObjectFill1Wght300Grad0Opsz48'
import IconDataObjectFill1Wght400Grad0Opsz48 from '../components/DataObjectFill1Wght400Grad0Opsz48'
import IconDataObjectFill1Wght500Grad0Opsz48 from '../components/DataObjectFill1Wght500Grad0Opsz48'
import IconDataObjectFill1Wght600Grad0Opsz48 from '../components/DataObjectFill1Wght600Grad0Opsz48'
import IconDataObjectFill1Wght700Grad0Opsz48 from '../components/DataObjectFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDataObject = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDataObjectFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDataObjectFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDataObjectFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDataObjectFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDataObjectFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDataObjectFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDataObjectFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDataObjectFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDataObjectFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDataObjectFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDataObjectFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDataObjectFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDataObjectFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDataObjectFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
