import IconDeblurFill0Wght100Grad0Opsz48 from '../components/DeblurFill0Wght100Grad0Opsz48'
import IconDeblurFill0Wght200Grad0Opsz48 from '../components/DeblurFill0Wght200Grad0Opsz48'
import IconDeblurFill0Wght300Grad0Opsz48 from '../components/DeblurFill0Wght300Grad0Opsz48'
import IconDeblurFill0Wght400Grad0Opsz48 from '../components/DeblurFill0Wght400Grad0Opsz48'
import IconDeblurFill0Wght500Grad0Opsz48 from '../components/DeblurFill0Wght500Grad0Opsz48'
import IconDeblurFill0Wght600Grad0Opsz48 from '../components/DeblurFill0Wght600Grad0Opsz48'
import IconDeblurFill0Wght700Grad0Opsz48 from '../components/DeblurFill0Wght700Grad0Opsz48'
import IconDeblurFill1Wght100Grad0Opsz48 from '../components/DeblurFill1Wght100Grad0Opsz48'
import IconDeblurFill1Wght200Grad0Opsz48 from '../components/DeblurFill1Wght200Grad0Opsz48'
import IconDeblurFill1Wght300Grad0Opsz48 from '../components/DeblurFill1Wght300Grad0Opsz48'
import IconDeblurFill1Wght400Grad0Opsz48 from '../components/DeblurFill1Wght400Grad0Opsz48'
import IconDeblurFill1Wght500Grad0Opsz48 from '../components/DeblurFill1Wght500Grad0Opsz48'
import IconDeblurFill1Wght600Grad0Opsz48 from '../components/DeblurFill1Wght600Grad0Opsz48'
import IconDeblurFill1Wght700Grad0Opsz48 from '../components/DeblurFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDeblur = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDeblurFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDeblurFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDeblurFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDeblurFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDeblurFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDeblurFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDeblurFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDeblurFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDeblurFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDeblurFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDeblurFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDeblurFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDeblurFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDeblurFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
