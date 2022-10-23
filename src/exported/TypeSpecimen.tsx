import IconTypeSpecimenFill0Wght100Grad0Opsz48 from '../components/TypeSpecimenFill0Wght100Grad0Opsz48'
import IconTypeSpecimenFill0Wght200Grad0Opsz48 from '../components/TypeSpecimenFill0Wght200Grad0Opsz48'
import IconTypeSpecimenFill0Wght300Grad0Opsz48 from '../components/TypeSpecimenFill0Wght300Grad0Opsz48'
import IconTypeSpecimenFill0Wght400Grad0Opsz48 from '../components/TypeSpecimenFill0Wght400Grad0Opsz48'
import IconTypeSpecimenFill0Wght500Grad0Opsz48 from '../components/TypeSpecimenFill0Wght500Grad0Opsz48'
import IconTypeSpecimenFill0Wght600Grad0Opsz48 from '../components/TypeSpecimenFill0Wght600Grad0Opsz48'
import IconTypeSpecimenFill0Wght700Grad0Opsz48 from '../components/TypeSpecimenFill0Wght700Grad0Opsz48'
import IconTypeSpecimenFill1Wght100Grad0Opsz48 from '../components/TypeSpecimenFill1Wght100Grad0Opsz48'
import IconTypeSpecimenFill1Wght200Grad0Opsz48 from '../components/TypeSpecimenFill1Wght200Grad0Opsz48'
import IconTypeSpecimenFill1Wght300Grad0Opsz48 from '../components/TypeSpecimenFill1Wght300Grad0Opsz48'
import IconTypeSpecimenFill1Wght400Grad0Opsz48 from '../components/TypeSpecimenFill1Wght400Grad0Opsz48'
import IconTypeSpecimenFill1Wght500Grad0Opsz48 from '../components/TypeSpecimenFill1Wght500Grad0Opsz48'
import IconTypeSpecimenFill1Wght600Grad0Opsz48 from '../components/TypeSpecimenFill1Wght600Grad0Opsz48'
import IconTypeSpecimenFill1Wght700Grad0Opsz48 from '../components/TypeSpecimenFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTypeSpecimen = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTypeSpecimenFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTypeSpecimenFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTypeSpecimenFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTypeSpecimenFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTypeSpecimenFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTypeSpecimenFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTypeSpecimenFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTypeSpecimenFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTypeSpecimenFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTypeSpecimenFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTypeSpecimenFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTypeSpecimenFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTypeSpecimenFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTypeSpecimenFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
