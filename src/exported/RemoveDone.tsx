import IconRemoveDoneFill0Wght100Grad0Opsz48 from '../components/RemoveDoneFill0Wght100Grad0Opsz48'
import IconRemoveDoneFill0Wght200Grad0Opsz48 from '../components/RemoveDoneFill0Wght200Grad0Opsz48'
import IconRemoveDoneFill0Wght300Grad0Opsz48 from '../components/RemoveDoneFill0Wght300Grad0Opsz48'
import IconRemoveDoneFill0Wght400Grad0Opsz48 from '../components/RemoveDoneFill0Wght400Grad0Opsz48'
import IconRemoveDoneFill0Wght500Grad0Opsz48 from '../components/RemoveDoneFill0Wght500Grad0Opsz48'
import IconRemoveDoneFill0Wght600Grad0Opsz48 from '../components/RemoveDoneFill0Wght600Grad0Opsz48'
import IconRemoveDoneFill0Wght700Grad0Opsz48 from '../components/RemoveDoneFill0Wght700Grad0Opsz48'
import IconRemoveDoneFill1Wght100Grad0Opsz48 from '../components/RemoveDoneFill1Wght100Grad0Opsz48'
import IconRemoveDoneFill1Wght200Grad0Opsz48 from '../components/RemoveDoneFill1Wght200Grad0Opsz48'
import IconRemoveDoneFill1Wght300Grad0Opsz48 from '../components/RemoveDoneFill1Wght300Grad0Opsz48'
import IconRemoveDoneFill1Wght400Grad0Opsz48 from '../components/RemoveDoneFill1Wght400Grad0Opsz48'
import IconRemoveDoneFill1Wght500Grad0Opsz48 from '../components/RemoveDoneFill1Wght500Grad0Opsz48'
import IconRemoveDoneFill1Wght600Grad0Opsz48 from '../components/RemoveDoneFill1Wght600Grad0Opsz48'
import IconRemoveDoneFill1Wght700Grad0Opsz48 from '../components/RemoveDoneFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRemoveDone = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRemoveDoneFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRemoveDoneFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRemoveDoneFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRemoveDoneFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRemoveDoneFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRemoveDoneFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRemoveDoneFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRemoveDoneFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRemoveDoneFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRemoveDoneFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRemoveDoneFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRemoveDoneFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRemoveDoneFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRemoveDoneFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
