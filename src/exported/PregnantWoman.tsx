import IconPregnantWomanFill0Wght100Grad0Opsz48 from '../components/PregnantWomanFill0Wght100Grad0Opsz48'
import IconPregnantWomanFill0Wght200Grad0Opsz48 from '../components/PregnantWomanFill0Wght200Grad0Opsz48'
import IconPregnantWomanFill0Wght300Grad0Opsz48 from '../components/PregnantWomanFill0Wght300Grad0Opsz48'
import IconPregnantWomanFill0Wght400Grad0Opsz48 from '../components/PregnantWomanFill0Wght400Grad0Opsz48'
import IconPregnantWomanFill0Wght500Grad0Opsz48 from '../components/PregnantWomanFill0Wght500Grad0Opsz48'
import IconPregnantWomanFill0Wght600Grad0Opsz48 from '../components/PregnantWomanFill0Wght600Grad0Opsz48'
import IconPregnantWomanFill0Wght700Grad0Opsz48 from '../components/PregnantWomanFill0Wght700Grad0Opsz48'
import IconPregnantWomanFill1Wght100Grad0Opsz48 from '../components/PregnantWomanFill1Wght100Grad0Opsz48'
import IconPregnantWomanFill1Wght200Grad0Opsz48 from '../components/PregnantWomanFill1Wght200Grad0Opsz48'
import IconPregnantWomanFill1Wght300Grad0Opsz48 from '../components/PregnantWomanFill1Wght300Grad0Opsz48'
import IconPregnantWomanFill1Wght400Grad0Opsz48 from '../components/PregnantWomanFill1Wght400Grad0Opsz48'
import IconPregnantWomanFill1Wght500Grad0Opsz48 from '../components/PregnantWomanFill1Wght500Grad0Opsz48'
import IconPregnantWomanFill1Wght600Grad0Opsz48 from '../components/PregnantWomanFill1Wght600Grad0Opsz48'
import IconPregnantWomanFill1Wght700Grad0Opsz48 from '../components/PregnantWomanFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPregnantWoman = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPregnantWomanFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPregnantWomanFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPregnantWomanFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPregnantWomanFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPregnantWomanFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPregnantWomanFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPregnantWomanFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPregnantWomanFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPregnantWomanFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPregnantWomanFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPregnantWomanFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPregnantWomanFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPregnantWomanFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPregnantWomanFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
