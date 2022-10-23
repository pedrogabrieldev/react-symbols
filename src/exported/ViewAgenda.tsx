import IconViewAgendaFill0Wght100Grad0Opsz48 from '../components/ViewAgendaFill0Wght100Grad0Opsz48'
import IconViewAgendaFill0Wght200Grad0Opsz48 from '../components/ViewAgendaFill0Wght200Grad0Opsz48'
import IconViewAgendaFill0Wght300Grad0Opsz48 from '../components/ViewAgendaFill0Wght300Grad0Opsz48'
import IconViewAgendaFill0Wght400Grad0Opsz48 from '../components/ViewAgendaFill0Wght400Grad0Opsz48'
import IconViewAgendaFill0Wght500Grad0Opsz48 from '../components/ViewAgendaFill0Wght500Grad0Opsz48'
import IconViewAgendaFill0Wght600Grad0Opsz48 from '../components/ViewAgendaFill0Wght600Grad0Opsz48'
import IconViewAgendaFill0Wght700Grad0Opsz48 from '../components/ViewAgendaFill0Wght700Grad0Opsz48'
import IconViewAgendaFill1Wght100Grad0Opsz48 from '../components/ViewAgendaFill1Wght100Grad0Opsz48'
import IconViewAgendaFill1Wght200Grad0Opsz48 from '../components/ViewAgendaFill1Wght200Grad0Opsz48'
import IconViewAgendaFill1Wght300Grad0Opsz48 from '../components/ViewAgendaFill1Wght300Grad0Opsz48'
import IconViewAgendaFill1Wght400Grad0Opsz48 from '../components/ViewAgendaFill1Wght400Grad0Opsz48'
import IconViewAgendaFill1Wght500Grad0Opsz48 from '../components/ViewAgendaFill1Wght500Grad0Opsz48'
import IconViewAgendaFill1Wght600Grad0Opsz48 from '../components/ViewAgendaFill1Wght600Grad0Opsz48'
import IconViewAgendaFill1Wght700Grad0Opsz48 from '../components/ViewAgendaFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconViewAgenda = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconViewAgendaFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconViewAgendaFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconViewAgendaFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconViewAgendaFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconViewAgendaFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconViewAgendaFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconViewAgendaFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconViewAgendaFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconViewAgendaFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconViewAgendaFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconViewAgendaFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconViewAgendaFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconViewAgendaFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconViewAgendaFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
