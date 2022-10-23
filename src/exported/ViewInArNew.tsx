import IconViewInArNewFill0Wght100Grad0Opsz48 from '../components/ViewInArNewFill0Wght100Grad0Opsz48'
import IconViewInArNewFill0Wght200Grad0Opsz48 from '../components/ViewInArNewFill0Wght200Grad0Opsz48'
import IconViewInArNewFill0Wght300Grad0Opsz48 from '../components/ViewInArNewFill0Wght300Grad0Opsz48'
import IconViewInArNewFill0Wght400Grad0Opsz48 from '../components/ViewInArNewFill0Wght400Grad0Opsz48'
import IconViewInArNewFill0Wght500Grad0Opsz48 from '../components/ViewInArNewFill0Wght500Grad0Opsz48'
import IconViewInArNewFill0Wght600Grad0Opsz48 from '../components/ViewInArNewFill0Wght600Grad0Opsz48'
import IconViewInArNewFill0Wght700Grad0Opsz48 from '../components/ViewInArNewFill0Wght700Grad0Opsz48'
import IconViewInArNewFill1Wght100Grad0Opsz48 from '../components/ViewInArNewFill1Wght100Grad0Opsz48'
import IconViewInArNewFill1Wght200Grad0Opsz48 from '../components/ViewInArNewFill1Wght200Grad0Opsz48'
import IconViewInArNewFill1Wght300Grad0Opsz48 from '../components/ViewInArNewFill1Wght300Grad0Opsz48'
import IconViewInArNewFill1Wght400Grad0Opsz48 from '../components/ViewInArNewFill1Wght400Grad0Opsz48'
import IconViewInArNewFill1Wght500Grad0Opsz48 from '../components/ViewInArNewFill1Wght500Grad0Opsz48'
import IconViewInArNewFill1Wght600Grad0Opsz48 from '../components/ViewInArNewFill1Wght600Grad0Opsz48'
import IconViewInArNewFill1Wght700Grad0Opsz48 from '../components/ViewInArNewFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconViewInArNew = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconViewInArNewFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconViewInArNewFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconViewInArNewFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconViewInArNewFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconViewInArNewFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconViewInArNewFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconViewInArNewFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconViewInArNewFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconViewInArNewFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconViewInArNewFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconViewInArNewFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconViewInArNewFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconViewInArNewFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconViewInArNewFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
