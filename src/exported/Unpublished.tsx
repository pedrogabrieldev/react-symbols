import IconUnpublishedFill0Wght100Grad0Opsz48 from '../components/UnpublishedFill0Wght100Grad0Opsz48'
import IconUnpublishedFill0Wght200Grad0Opsz48 from '../components/UnpublishedFill0Wght200Grad0Opsz48'
import IconUnpublishedFill0Wght300Grad0Opsz48 from '../components/UnpublishedFill0Wght300Grad0Opsz48'
import IconUnpublishedFill0Wght400Grad0Opsz48 from '../components/UnpublishedFill0Wght400Grad0Opsz48'
import IconUnpublishedFill0Wght500Grad0Opsz48 from '../components/UnpublishedFill0Wght500Grad0Opsz48'
import IconUnpublishedFill0Wght600Grad0Opsz48 from '../components/UnpublishedFill0Wght600Grad0Opsz48'
import IconUnpublishedFill0Wght700Grad0Opsz48 from '../components/UnpublishedFill0Wght700Grad0Opsz48'
import IconUnpublishedFill1Wght100Grad0Opsz48 from '../components/UnpublishedFill1Wght100Grad0Opsz48'
import IconUnpublishedFill1Wght200Grad0Opsz48 from '../components/UnpublishedFill1Wght200Grad0Opsz48'
import IconUnpublishedFill1Wght300Grad0Opsz48 from '../components/UnpublishedFill1Wght300Grad0Opsz48'
import IconUnpublishedFill1Wght400Grad0Opsz48 from '../components/UnpublishedFill1Wght400Grad0Opsz48'
import IconUnpublishedFill1Wght500Grad0Opsz48 from '../components/UnpublishedFill1Wght500Grad0Opsz48'
import IconUnpublishedFill1Wght600Grad0Opsz48 from '../components/UnpublishedFill1Wght600Grad0Opsz48'
import IconUnpublishedFill1Wght700Grad0Opsz48 from '../components/UnpublishedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconUnpublished = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconUnpublishedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconUnpublishedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconUnpublishedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconUnpublishedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconUnpublishedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconUnpublishedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconUnpublishedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconUnpublishedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconUnpublishedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconUnpublishedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconUnpublishedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconUnpublishedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconUnpublishedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconUnpublishedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
